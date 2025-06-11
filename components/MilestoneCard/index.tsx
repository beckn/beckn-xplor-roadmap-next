import { useRouter } from 'next/router'
import { Doughnut } from 'react-chartjs-2'
import { ArcElement, Chart } from 'chart.js'
import Button from 'components/Button'
import { DETAILS } from 'constants/labels'
import { IMilestoneCard } from './types'
import {
  DoughnutContent,
  DoughnutWrapper,
  HeadingWrapper,
  Wrapper,
  ButtonWrapper,
  AllMilestonesContent,
  DetailsWrapper,
  DoungnutText,
  TextWrapper,
  SubDoungnutText,
  SubDoungnut,
  LabelWrapper,
  DetailsHeadingWrapper,
} from 'styles/components/MilestoneCard'

const MilestoneCard = ({ data, options, legendColor, indexof }: IMilestoneCard) => {
  Chart.register(ArcElement)
  const router = useRouter()
  const handleNavigate = () => {
    router.push(`/milestones/${data?.id}`)
  }

  return (
    <Wrapper>
      <DoughnutWrapper>
        <Doughnut data={data} options={options} />
        <DoungnutText>
          <SubDoungnutText>{data?.progress ? 'Completed' : 'Not Started'}</SubDoungnutText>
          <SubDoungnut>{data?.progress ? parseFloat(data?.progress?.toFixed(0)) : 0}%</SubDoungnut>
        </DoungnutText>
      </DoughnutWrapper>
      <DoughnutContent>
        <DetailsHeadingWrapper>
          <HeadingWrapper>
            Milestone {indexof + 1}: {data?.datasets[0]?.label}
          </HeadingWrapper>
          <DetailsWrapper>
            {data?.labels?.map((label: string, index: number) => (
              <AllMilestonesContent key={index}>
                <span
                  style={{
                    color: data?.progress !== 0 ? data?.datasets[0]?.backgroundColor[index] : legendColor[index],
                  }}
                >
                  ●
                </span>
                <TextWrapper>
                  <LabelWrapper>{label}</LabelWrapper>
                  <LabelWrapper>
                    {data?.progress !== 0
                      ? !Number.isNaN(parseFloat(data?.datasets[0]?.data[index]?.toFixed(0)))
                        ? parseFloat(data?.datasets[0]?.data[index]?.toFixed(0))
                        : 0
                      : 0}%
                  </LabelWrapper>
                </TextWrapper>
              </AllMilestonesContent>
            ))}
          </DetailsWrapper>
        </DetailsHeadingWrapper>
        <ButtonWrapper>
          <Button
            label={DETAILS}
            variant={data?.isActive ? 'contained' : 'disabled'}
            onClick={handleNavigate}
            disabled={!data?.isActive}
          />
        </ButtonWrapper>
      </DoughnutContent>
    </Wrapper>
  )
}

export default MilestoneCard
