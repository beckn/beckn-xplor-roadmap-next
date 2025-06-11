import MilestoneCard from 'components/MilestoneCard'
import { IMilestone, MilestoneChartData } from './types'
import { options, legendColor } from './data'
import { Container, HeadingWrapper, MilestonesWrapper, CardWrapper } from 'styles/views/Milestones'

const Milestones = ({ data }: IMilestone) => (
  <Container>
    <HeadingWrapper>Milestones</HeadingWrapper>

    <MilestonesWrapper>
      {data?.map((item: MilestoneChartData, index: number) => (
        <CardWrapper key={index}>
          <MilestoneCard data={item} options={options} legendColor={legendColor} indexof={index} />
        </CardWrapper>
      ))}
    </MilestonesWrapper>
  </Container>
)

export default Milestones
