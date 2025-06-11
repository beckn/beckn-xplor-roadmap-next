import { useForm } from 'react-hook-form'
import Button from 'components/Button'
import TextInput from 'components/TextInput'
import AvatarCard from 'components/Avatar'
import Comments from 'components/Comments'
import AvatarIcon from 'assets/images/avatar.png'
import ArrowSvg from 'assets/svg/ArrowIcon'
import { DEMO, POST } from 'constants/labels'
import { PlaceholderData } from 'constants/placeholder'
import { data } from './data'
import { HeadingWrapper, Container } from 'styles/views/Milestones'
import {
  MainWrapper,
  LatestDemosWrapper,
  DetailsWrapper,
  Details,
  DetailsHeading,
  DateWrapper,
  DiscussionWrapper,
  DiscussionHeading,
  Partition,
  PostCommentWrapper,
  InputWrapper,
  ButtonWrapper,
  AvatarWrapper,
} from 'styles/views/Demos'

const LatestDemos = () => {
  const { control } = useForm()
  return (
    <MainWrapper>
      <Container>
        <HeadingWrapper>Latest Demos</HeadingWrapper>
        <LatestDemosWrapper>
          <DetailsWrapper>
            <Details>
              <DetailsHeading>Digital Profile - Demo 1</DetailsHeading>
              <DateWrapper>5th April, 2024</DateWrapper>
            </Details>
            <Button label={DEMO} variant={'contained'}>
              <ArrowSvg />
            </Button>
          </DetailsWrapper>
          <Partition></Partition>
          <DiscussionWrapper>
            <DiscussionHeading>Discussion</DiscussionHeading>
            <PostCommentWrapper>
              <AvatarWrapper>
                <AvatarCard icon={AvatarIcon} width={20} height={20} />
              </AvatarWrapper>
              <InputWrapper>
                <TextInput placeholder={PlaceholderData?.commentTopic} control={control} name="comment" />
              </InputWrapper>
              <ButtonWrapper>
                <Button label={POST} variant="contained" />
              </ButtonWrapper>
            </PostCommentWrapper>
          </DiscussionWrapper>
          {data?.map((item, index) => (
            <div key={index}>
              <Comments
                name={item?.name}
                time={item?.time}
                content={item?.content}
                likes={item?.likes}
                width={20}
                height={20}
              />
            </div>
          ))}
        </LatestDemosWrapper>
      </Container>
    </MainWrapper>
  )
}

export default LatestDemos
