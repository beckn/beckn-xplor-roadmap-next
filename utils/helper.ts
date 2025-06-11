import moment from 'moment'
import { IDashboardMilestone } from 'interfaces'
import { notification } from 'antd'

interface Task {
  dueCount: number
  doneCount: number
}

interface TaskData {
  [date: string]: Task
}

const milestoneColors = ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15']

export function generateMilestoneData(projectData: any, transformedData: any) {
  let activeId: number
  for (let i = projectData.length - 1; i >= 0; i--) {
    if (Object.keys(projectData[i].tickets).length > 0) {
      activeId = projectData[i].id
      break
    }
  }

  const milestoneData = projectData?.map((board: any, index: number) => {
    // const currentMilestone = activeId === board.id
    const counts = board?.tickets
    // const boardTotal: any = Object.values(counts)?.reduce((acc, category: any) => acc + category?.totalCount, 0)
    // const boardDone: any = Object.values(counts)?.reduce((acc, category: any) => acc + category?.doneCount, 0)

    const newProgress = transformedData.find((item: { id: number }) => item.id === board.id)
    // const completion =
    //   boardTotal === 0 ? 0 : currentMilestone ? (boardDone / boardTotal) * 100 : (boardDone / boardTotal) * 100
    return {
      text: `Milestone ${index + 1}`,
      color: milestoneColors[index % milestoneColors?.length],
      completion: newProgress?.progress?.toFixed(2),
    }
  })

  const overallTotal = milestoneData?.reduce((acc: any, milestone: any) => acc + parseInt(milestone?.completion), 0)
  const overallCompletion = (overallTotal / milestoneData?.length).toFixed(2)
  return {
    milestoneData,
    overallCompletion,
  }
}

export function generateChartData(sprint: TaskData, sdate: string, edate: string) {
  const dates = Object.keys(sprint)
  const formattedDates = dates.map((date) => moment(date).format('DD MMM'))
  const newStartDate = new Date(sdate)
  const newEndDate = new Date(edate)
  const currentDate = new Date()
  const currentDateTimestamp = currentDate.getTime()
  const newEndDateTimestamp = newEndDate.getTime()
  const date = currentDateTimestamp > newEndDateTimestamp ? 15 : new Date().getDate() - newStartDate.getDate()
  let [dueValue, doneValue] = [0, 0]
  const dueCounts: number[] = Object.values(sprint).map((value: any) => (dueValue += value.dueCount))
  const doneCounts: number[] = Object.values(sprint).map((value: any) => (doneValue += value.doneCount))
  const getPercentages = (counts: number[]): number[] =>
    counts.map((value: number) => {
      const finalValue: number = dueCounts[dueCounts.length - 1]
      if (!finalValue) return 0
      else return (value / finalValue) * 100
    })

  const chartData = {
    labels: [0, ...formattedDates],
    datasets: [
      {
        label: 'Expected',
        data: [0, ...getPercentages(dueCounts)],
        borderColor: '#344BFD',
        tension: 0.1,
        pointRadius: 1,
        borderWidth: 2,
      },
      {
        label: 'Actual',
        data: [0, ...getPercentages(doneCounts)].slice(0, date + 2),
        borderColor: '#05C283',
        tension: 0.1,
        pointRadius: 1,
        borderWidth: 2,
      },
    ],
  }

  return chartData
}

const getMilestoneProgress = (ticketsProgress: number[]) => {
  let totalProgress: number = 0
  ticketsProgress?.forEach((progress: number) => {
    totalProgress += progress
  })
  const result = totalProgress / ticketsProgress?.length
  return Number.isNaN(result) ? 0 : result
}

export async function transformedMilestoneData(data: IDashboardMilestone[]) {
  let activeId: number
  for (let i = data.length - 1; i >= 0; i--) {
    if (Object.keys(data[i].tickets).length > 0) {
      activeId = data[i].id
      break
    }
  }

  const transformData = data?.map((item: IDashboardMilestone) => {
    const milestoneCreatedAt = new Date(item.createdAt)
    const currentDate = new Date()
    const twoWeeksInMilliseconds = 14 * 24 * 60 * 60 * 1000
    const isMoreThanTwoWeeks = currentDate.getTime() - milestoneCreatedAt.getTime() > twoWeeksInMilliseconds
    const activeMilestone = activeId === item.id ? true : false
    const orderedTickets = {
      'Research & Design': item.tickets['Research & Design'] ? item.tickets['Research & Design'] : {},
      Documentation: item.tickets.Documentation ? item.tickets.Documentation : {},
      Development: item.tickets.Development ? item.tickets.Development : {},
      Testing: item.tickets.Testing ? item.tickets.Testing : {},
    }

    const labels = Object?.keys(orderedTickets)
    return {
      id: item?.id,
      labels: labels.length > 0 ? labels : ['Research & Design', 'Development', 'Documentation', 'Testing'],
      progress: getMilestoneProgress(
        Object.values(item?.tickets)?.map((ticket: { doneCount: number; totalCount: number }) => {
          const result = ticket?.doneCount / ticket?.totalCount
          return activeMilestone && isMoreThanTwoWeeks ? result * 100 : result * 100
        }),
      ),
      isActive: Object.keys(item?.tickets).length > 0 ? true : false,
      datasets: [
        {
          label: item?.title,
          data: Object?.values(orderedTickets)?.map((ticket: any) => {
            const result = ticket?.doneCount / ticket?.totalCount
            return activeMilestone && isMoreThanTwoWeeks ? result * 100 : result * 100
          }),
          backgroundColor: ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15'],
          hoverOffset: 4,
          borderWidth: 1,
        },
      ],
    }
  })

  return transformData
}

export const downloadLink = async (link: string) => {
  try {
    notification.success({ message: '', description: 'Download started...' })

    const response = await fetch(link)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)

    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = 'video.mp4'
    document.body.appendChild(anchor)
    anchor.click()
    document.body.removeChild(anchor)

    URL.revokeObjectURL(url)

    notification.success({ message: '', description: 'Download completed' })
  } catch (error: any) {
    notification.error({ message: error.message, description: 'Error downloading file' })
  }
}
