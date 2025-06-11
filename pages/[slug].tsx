import { useEffect } from 'react'
import { useRouter } from 'next/router'
import WelcomeSection from 'views/Dashboard/welcomeSection'
import Milestones from 'views/Dashboard/dashboardMilestones'
import MarketingSection from 'views/Dashboard/marketing'
import { fetchDashboardData } from 'utils/getServerSideData'
import { generateMilestoneData, transformedMilestoneData } from 'utils/helper'
import { IDashboard, MilestoneChartData } from 'interfaces'
import { Container, LatestDetailsWrapper } from 'styles/pages'

const Home = ({ transformedData, allMilestone, error }: IDashboard & { error?: string }) => {
  const routeSlug = useRouter()
  useEffect(() => {
    const slug = routeSlug.query.slug as string
    if (!error) {
      localStorage.setItem('slug', slug.toLowerCase())
    }
  }, [])

  useEffect(() => {
    if (error) {
      routeSlug.push('/404')
    }
  }, [error])

  if (error) {
    return null
  }

  return (
    <Container>
      <WelcomeSection overallCompletion={allMilestone?.overallCompletion} milestoneData={allMilestone?.milestoneData} />
      <MarketingSection />
      <Milestones data={transformedData} />
      <LatestDetailsWrapper>
        {/* <LatestDemos /> */}
        {/* <LatestReleases heading={heading} /> */}
      </LatestDetailsWrapper>
    </Container>
  )
}

export async function getServerSideProps(ctx: { params: { slug: string } }) {
  try {
    const { slug } = ctx.params
    const alldashboardData = await fetchDashboardData(slug)

    if (!alldashboardData) {
      return {
        props: {
          error: 'Not Found',
        },
      }
    }

    const transformedData: MilestoneChartData[] = await transformedMilestoneData(alldashboardData?.data?.milestones)
    const allMilestone = generateMilestoneData(alldashboardData?.data?.milestones, transformedData)

    return {
      props: {
        transformedData,
        allMilestone,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch milestones data',
      },
    }
  }
}

export default Home
