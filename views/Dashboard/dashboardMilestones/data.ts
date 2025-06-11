import { MilestoneChartData, MilestoneChartOptions } from './types'

export const customData: MilestoneChartData[] = [
  {
    id: 1,
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 0,
    isActive: false,
    datasets: [
      {
        label: 'Milestone 1: Digital Profile and Wallet',
        data: [1],
        backgroundColor: ['#E1EFFE'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  {
    id: 2,
    isActive: false,
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 0,
    datasets: [
      {
        label: 'Milestone 2: Transaction layer (DOFP)',
        data: [1],
        backgroundColor: ['#E1EFFE'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  {
    id: 3,
    isActive: false,
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 0,
    datasets: [
      {
        label: 'Milestone 3: ONIX Adapter and Payment gateway Integration ',
        data: [1],
        backgroundColor: ['#E1EFFE'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
  {
    id: 4,
    isActive: false,
    labels: ['Sprint & Design', 'Development & Testing', 'Documentation', 'Ready for Production'],
    progress: 0,
    datasets: [
      {
        label: 'Milestone 4:  Personalized Recommendations AI focused',
        data: [1],
        backgroundColor: ['#E1EFFE'],
        hoverOffset: 4,
        borderWidth: 1,
      },
    ],
  },
]

export const legendColor = ['#14B8A6', '#3B82F6', '#F59E0B', '#FACC15']

export const options: MilestoneChartOptions = {
  maintainAspectRatio: false,
  responsive: true,
  cutout: '66%',
  plugins: {
    title: {
      display: false,
      text: 'Custom Doughnut Chart',
      fontSize: 18,
      fontColor: 'black',
    },
  },
}
