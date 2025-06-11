export interface IProgressData {
  type: 'circle' | 'line' | 'dashboard' | undefined
  steps: number
  percent: number
  trailColor: string
  strokeWidth: number | undefined
  strokeColor: string
  text: string
}

export interface ISprintData {
  data: IProgressData[]
}
