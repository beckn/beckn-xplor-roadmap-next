import MilestoneSection from 'views/Milestones/milestoneSection'
import { fetchDashboardData } from 'utils/getServerSideData'
import { transformedMilestoneData } from 'utils/helper'
import { MilestoneChartData, ISprintChartData } from 'interfaces'
import { Container, HeadingWrapper } from 'styles/pages/milestones'

const MilestonesDetails = ({ transformedData }: { transformedData: ISprintChartData[] }) => (
  <Container>
    <HeadingWrapper>Milestones</HeadingWrapper>
    <MilestoneSection transformedData={transformedData} />
  </Container>
)

export async function getServerSideProps(ctx: { query: { slug: string } }) {
  try {
    const { slug } = ctx.query
    const alldashboardData = await fetchDashboardData(slug)

    const transformedData: MilestoneChartData[] = await transformedMilestoneData(alldashboardData?.data?.milestones)

    return {
      props: {
        transformedData,
      },
    }
  } catch (error) {
    return {
      props: {
        heading: 'Latest Releases',
        error: 'Failed to fetch milestones data',
      },
    }
  }
}

export default MilestonesDetails
