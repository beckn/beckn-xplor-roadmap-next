import Sprint from 'views/Milestones/sprint'
import type { CollapseProps } from 'antd'
import { MilestoneChartData, MilestoneChartOptions } from './types'
import { HeadingCollapse, DateWrapper } from 'styles/views/Releases'

export const data: MilestoneChartData[] = [
  {
    id: '1',
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 52,
    datasets: [
      {
        label: 'Sprint 1: Digital Profile',
        data: [100, 75, 55, 25],
        backgroundColor: ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  {
    id: '2',
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 45,
    datasets: [
      {
        label: 'Sprint 2: Digital Wallet',
        data: [10, 100, 25, 55],
        backgroundColor: ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
]

export const options: MilestoneChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  cutout: '66%',
  plugins: {
    tooltip: {
      enabled: false,
    },
    title: {
      display: false,
      text: 'Custom Doughnut Chart',
      fontSize: 18,
      fontColor: 'black',
    },
  },
}

export const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <HeadingCollapse>
        Sprint 1: Digital Profile <DateWrapper>(1st April - 15th April)</DateWrapper>
      </HeadingCollapse>
    ),
    children: <Sprint data={[]} />,
  },
]
