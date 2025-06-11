import ActiveSvg from 'assets/svg/ActiveIcon'
import ForkSvg from 'assets/svg/ForkIcon'
import RepoSvg from 'assets/svg/RepoIcon'
import StarSvg from 'assets/svg/StarIcon'
import { data } from './data'
import {
  Container,
  HeadingWrapper,
  InfoWrapper,
  RepoHeadingWrapper,
  RepositoriesWrapper,
  RepoDateWrapper,
  RepoInfo,
  ActionsWrapper,
  IconWrapper,
} from 'styles/views/Repositories'

const Repositories = () => (
  <Container>
    <HeadingWrapper>
      Repositories<span>View All</span>
    </HeadingWrapper>
    {data?.map((item, index) => (
      <RepositoriesWrapper key={index}>
        <InfoWrapper>
          <RepoSvg />
          <RepoHeadingWrapper>{item?.reponame}</RepoHeadingWrapper>
          <RepoDateWrapper>{item?.time}</RepoDateWrapper>
        </InfoWrapper>
        <RepoInfo>{item?.info}</RepoInfo>
        <ActionsWrapper>
          <IconWrapper>
            <ActiveSvg />
            <span>C</span>
          </IconWrapper>
          <IconWrapper>
            <StarSvg />
          </IconWrapper>
          <IconWrapper>
            <ForkSvg />
          </IconWrapper>
        </ActionsWrapper>
      </RepositoriesWrapper>
    ))}
  </Container>
)

export default Repositories
