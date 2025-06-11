import { IApiSprint, ISprintChartData } from 'interfaces'

export interface MilestoneDataset {
  label: string
  data: number[]
  backgroundColor: string[]
  hoverOffset: number
  borderWidth?: number
}

export interface MilestoneChartData {
  labels: string[]
  datasets: MilestoneDataset[]
  id: string
  progress: number
}

export interface MilestoneChartOptions {
  maintainAspectRatio: boolean
  responsive: boolean
  cutout: string
  plugins: {
    tooltip: {
      enabled: boolean
    }
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
}

export interface ISprint {
  data: ISprintChartData[]
  sprintData: IApiSprint[]
}
