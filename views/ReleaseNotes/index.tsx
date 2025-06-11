import Collapes from 'components/Collapse'
import { items } from './data'
import { ILatestReleases } from './types'
import { CollapesWrapper, Container, HeadingWrapper } from 'styles/views/ReleaseNotes'

const ReleasesNotes = ({ heading }: ILatestReleases) => (
  <Container>
    <HeadingWrapper>
      {heading}
      <span>View All</span>
    </HeadingWrapper>
    <CollapesWrapper>
      <Collapes items={items} bordered={false} />
    </CollapesWrapper>
  </Container>
)

export default ReleasesNotes
