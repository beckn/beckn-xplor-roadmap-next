interface MilestoneDataset {
  label: string
  data: number[]
  backgroundColor: string[]
  hoverOffset: number
  borderWidth?: number
}

interface MilestoneChartData {
  labels: string[]
  datasets: MilestoneDataset[]
  id: string
  progress: number
}

interface MilestoneChartOptions {
  maintainAspectRatio: boolean
  responsive: boolean
  cutout: string
  plugins: {
    title: {
      display: boolean
      text: string
      fontSize: number
      fontColor: string
    }
  }
}

export interface IMilestoneCard {
  data: MilestoneChartData
  options: MilestoneChartOptions
  index: number
}
