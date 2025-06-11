import SprintDetails from 'views/Milestones/sprintDetails'
import LineChart from 'components/LineChart'
import { fetchMilestoneBoardData } from 'utils/getServerSideData'
import { generateChartData } from 'utils/helper'
import { IApiSprint, IMilestoneIdBoard, MilestoneChartData } from 'interfaces'
import { MilestoneBoardWrapper, HeadingWrapper, LineChartWrapper } from 'styles/pages/milestoneDetails'

const MilestoneBoard = ({ sprintCardData, chartData, sprintData, milestoneTitle }: IMilestoneIdBoard) => (
  <MilestoneBoardWrapper>
    <HeadingWrapper>Milestones: {milestoneTitle}</HeadingWrapper>
    <LineChartWrapper>
      <LineChart
        sprints={{
          labels: chartData?.labels,
          datasets: chartData?.datasets ? chartData?.datasets : [],
        }}
      />
    </LineChartWrapper>
    <SprintDetails data={sprintCardData} sprintData={sprintData} />
  </MilestoneBoardWrapper>
)

export async function getServerSideProps(ctx: { params: { id: number } }) {
  try {
    const { id } = ctx.params
    const data = await fetchMilestoneBoardData(id)
    const lastIndex = data?.data?.sprints.length - 1
    const chartData = generateChartData(
      data?.data?.sprints[lastIndex]?.progress,
      data?.data?.sprints[lastIndex]?.startDate,
      data?.data?.sprints[lastIndex]?.endDate,
    )
    const getMilestoneProgress = (ticketsProgress: number[]) => {
      let totalProgress: number = 0
      ticketsProgress.forEach((progress: number) => {
        totalProgress += progress
      })
      return totalProgress / ticketsProgress.length
    }

    const transformedData: MilestoneChartData[] = await data?.data?.sprints?.map((item: IApiSprint) => {
      const orderedTickets = {
        'Research & Design': item.sprintProgress['Research & Design'] ? item.sprintProgress['Research & Design'] : {},
        Documentation: item.sprintProgress.Documentation ? item.sprintProgress.Documentation : {},
        Development: item.sprintProgress.Development ? item.sprintProgress.Development : {},
        Testing: item.sprintProgress.Testing ? item.sprintProgress.Testing : {},
      }
      return {
        id: item.id,
        labels: Object.keys(orderedTickets),
        progress: getMilestoneProgress(
          Object.values(item?.sprintProgress).map((ticket: { doneCount: number; totalCount: number }) => {
            const result = ticket?.doneCount / ticket?.totalCount
            return result * 100
          }),
        ),
        datasets: [
          {
            label: item.title,
            data: Object.values(orderedTickets).map((ticket: any) => {
              const result = ticket?.doneCount / ticket?.totalCount
              return result * 100
            }),
            backgroundColor: ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15'],
            hoverOffset: 4,
            borderWidth: 1,
          },
        ],
      }
    })
    return {
      props: {
        sprintCardData: transformedData,
        chartData,
        sprintData: data.data?.sprints,
        milestoneTitle: data.data.milestone.title,
      },
    }
  } catch (error) {
    return {
      props: { data: null },
    }
  }
}

export default MilestoneBoard
