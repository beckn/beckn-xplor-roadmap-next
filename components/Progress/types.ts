export interface IProgress {
  type: 'circle' | 'line' | 'dashboard' | undefined
  steps: number
  percent: number
  trailColor: string
  strokeWidth: number | undefined
  strokeColor: string
}
