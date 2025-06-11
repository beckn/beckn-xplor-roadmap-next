import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js'
import { LinearScale, CategoryScale, PointElement, LineElement, Tooltip } from 'chart.js'
import {
  ChartWrapper,
  Heading,
  LineChartWrapper,
  LabelWrapper,
  LegendWrapper,
  ActiveWrapper,
  ExpectedWrapper,
} from 'styles/components/LineChart'
import { ChartData } from './types'

Chart.register(CategoryScale, PointElement, LinearScale, LineElement, Tooltip)
const LineChart = ({ sprints }: ChartData) => {
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
        grid: {
          display: false,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Progress',
        },
        min: 0,
        max: 100,
        ticks: {
          stepSize: 25,
          callback: (value: string | number) => `${value}%`,
        },
      },
    },
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: '#fff',
        bodyColor: '#1F2A37',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        callbacks: {
          title: function () {
            return ''
          },
        },
        padding: {
          top: 14,
          bottom: 10,
          left: 10,
          right: 10,
        },
      },
    },
  }

  return (
    <ChartWrapper>
      <Heading>
        Current Progress
        <LabelWrapper>
          <LegendWrapper>
            <ActiveWrapper>●</ActiveWrapper>Actual
          </LegendWrapper>
          <LegendWrapper>
            <ExpectedWrapper>●</ExpectedWrapper>Expected
          </LegendWrapper>
        </LabelWrapper>
      </Heading>
      <LineChartWrapper>
        <Line data={sprints} options={options} height={80} />
      </LineChartWrapper>
    </ChartWrapper>
  )
}

export default LineChart
