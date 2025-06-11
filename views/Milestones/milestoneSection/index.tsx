import MilestoneCard from 'components/MilestoneCard'
import { options, legendColor } from './data'
import { ISprintChartData } from 'interfaces'
import { CardWrapper, MilestoneCardWrapper } from 'styles/pages/milestones'

const MilestoneSection = ({ transformedData }: { transformedData: ISprintChartData[] }) => (
  <MilestoneCardWrapper>
    {transformedData?.map((item, index) => (
      <CardWrapper key={index}>
        <MilestoneCard data={item} options={options} legendColor={legendColor} indexof={index} />
      </CardWrapper>
    ))}
  </MilestoneCardWrapper>
)

export default MilestoneSection
