export interface ChartData {
  sprints: {
    labels: (number | string)[]
    datasets: {
      label: string
      data: number[]
      borderColor: string
      tension: number
      pointRadius: number
      borderWidth: number
    }[]
  }
}
