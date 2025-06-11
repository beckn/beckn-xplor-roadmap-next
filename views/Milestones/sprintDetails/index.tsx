import SprintCard from 'components/SprintCard'
import Collapes from 'components/Collapse'
import { generateItemsFromApiData } from 'utils/sprintTransform'
import { ISprint } from './types'
import { options } from './data'
import { MilestoneCardWrapper, CollapesWrapper, CardWrapper } from 'styles/pages/milestoneDetails'

const SprintDetails = ({ data, sprintData }: ISprint) => {
  const transformedSprint = generateItemsFromApiData(sprintData)
  return (
    <>
      <MilestoneCardWrapper>
        {data?.map((data: any, index: number) => (
          <CardWrapper key={index}>
            <SprintCard data={data} options={options} index={index} />
          </CardWrapper>
        ))}
      </MilestoneCardWrapper>
      {transformedSprint?.map((item: any, index: number) => (
        <CollapesWrapper key={index}>
          <Collapes items={[item]} bordered={false} />
        </CollapesWrapper>
      ))}
    </>
  )
}

export default SprintDetails
