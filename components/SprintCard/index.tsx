import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart } from 'chart.js'
import { IMilestoneCard } from './types'
import {
  DoughnutContent,
  DoughnutWrapper,
  HeadingWrapper,
  Wrapper,
  AllMilestonesContent,
  DetailsWrapper,
  DoungnutText,
  TextWrapper,
  SubDoungnutText,
  SubDoungnut,
  LabelWrapper,
} from 'styles/components/MilestoneCard'

Chart.register(ArcElement)

const SprintCard = ({ data, options, index }: IMilestoneCard) => (
  <Wrapper>
    <DoughnutWrapper>
      <Doughnut data={data} options={options} />
      <DoungnutText>
        <SubDoungnutText>{data?.progress ? 'Completed' : 'Not Started'}</SubDoungnutText>
        <SubDoungnut>{data?.progress ? parseFloat(data?.progress?.toFixed(0)) : 0}%</SubDoungnut>
      </DoungnutText>
    </DoughnutWrapper>
    <DoughnutContent>
      <HeadingWrapper>
        Sprint {index + 1}: {data?.datasets[0]?.label}
      </HeadingWrapper>
      <DetailsWrapper>
        {data?.labels?.map((label: string, index: number) => (
          <AllMilestonesContent key={index}>
            <span style={{ color: data?.datasets[0]?.backgroundColor[index] }}>●</span>
            <TextWrapper>
              <LabelWrapper>{label}</LabelWrapper>
              <LabelWrapper>
                {data?.datasets[0]?.data[index] ? parseFloat(data?.datasets[0]?.data[index]?.toFixed(1)) : 0}%
              </LabelWrapper>
            </TextWrapper>
          </AllMilestonesContent>
        ))}
      </DetailsWrapper>
    </DoughnutContent>
  </Wrapper>
)

export default SprintCard
