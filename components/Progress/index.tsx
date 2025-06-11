import { Progress } from 'antd'
import { IProgress } from './types'

const ProgressComponent = ({ type, steps, percent, trailColor, strokeWidth, strokeColor }: IProgress) => (
  <Progress
    type={type}
    steps={steps}
    percent={percent}
    trailColor={trailColor}
    strokeWidth={strokeWidth}
    strokeColor={strokeColor}
  />
)

export default ProgressComponent
