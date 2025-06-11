import Collapes from 'components/Collapse'
import { items } from './data'
import { ILatestReleases } from './types'
import { Container, HeadingWrapper } from 'styles/views/Milestones'
import { CollapesWrapper, MainWrapper } from 'styles/views/Releases'
import Head from 'next/head'

const LatestReleases = ({ heading }: ILatestReleases) => (
  <MainWrapper>
    <Head>
      <title>Xplor-roadmap</title>
    </Head>
    <Container>
      <HeadingWrapper>
        {heading}
        <span>View All</span>
      </HeadingWrapper>
      <CollapesWrapper>
        <Collapes items={items} bordered={false} />
      </CollapesWrapper>
    </Container>
  </MainWrapper>
)

export default LatestReleases
