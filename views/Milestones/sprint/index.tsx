import ProgressComponent from 'components/Progress'
// import Repositories from 'views/Milestones/repositories'
// import LatestDemos from 'views/Dashboard/demos'
// import ReleasesNotes from 'views/ReleaseNotes'
import { IProgressData, ISprintData } from './types'
import {
  // DemoInfo,
  ProgressContainer,
  ProgressHeading,
  ProgressWrapper,
  // SprintInfoWrapper,
  SprintProgress,
  Text,
} from 'styles/pages/milestoneDetails'

const Sprint = ({ data }: ISprintData) => {
  return (
    <ProgressWrapper>
      <ProgressHeading>Progress</ProgressHeading>
      <SprintProgress>
        {data?.map((item: IProgressData, index: number) => (
          <ProgressContainer key={index}>
            <ProgressComponent
              type={item?.type}
              steps={item?.steps}
              percent={item?.percent}
              trailColor={item?.trailColor}
              strokeWidth={item?.strokeWidth}
              strokeColor={item?.strokeColor}
            />
            <Text>{item?.text}</Text>
          </ProgressContainer>
        ))}
      </SprintProgress>
      {/* <SprintInfoWrapper>
        <Repositories />
        <ReleasesNotes heading={'Release Notes'} />
      </SprintInfoWrapper> */}
      {/* <DemoInfo>
        <ProgressHeading>Demos</ProgressHeading>
        <SprintInfoWrapper>
          <LatestDemos />
          <LatestDemos />
        </SprintInfoWrapper>
      </DemoInfo> */}
    </ProgressWrapper>
  )
}

export default Sprint
