import LinkSection from 'views/Documentation/LinkSection'
import { Wrapper, HeadingWrapper, ContentWrapper, ProjectName } from 'styles/pages/documentation/guide'

const UserGuide = () => (
  <Wrapper>
    <HeadingWrapper>Overview</HeadingWrapper>
    <ContentWrapper>
      <ProjectName>Digital Wallet</ProjectName>
      <LinkSection />
    </ContentWrapper>
  </Wrapper>
)

export default UserGuide
