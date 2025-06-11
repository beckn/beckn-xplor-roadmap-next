import Button from 'components/Button'
import { DEMO, POST } from 'constants/labels'
import AvatarCard from 'components/Avatar'
import TextInput from 'components/TextInput'
import Comments from 'components/Comments'
import ArrowSvg from 'assets/svg/ArrowIcon'
import AvatarIcon from 'assets/images/avatar.png'
import { PlaceholderData } from 'constants/placeholder'
import { IDemoData } from './types'
import {
  LatestDemosWrapper,
  DetailsWrapper,
  Details,
  DetailsHeading,
  DateWrapper,
  Partition,
  DiscussionWrapper,
  DiscussionHeading,
  PostCommentWrapper,
  AvatarWrapper,
  InputWrapper,
  ButtonWrapper,
} from 'styles/views/Demos'

const DemosComments = ({ demoName, date, comments, control }: IDemoData) => (
  <LatestDemosWrapper>
    <DetailsWrapper>
      <Details>
        <DetailsHeading>{demoName}</DetailsHeading>
        <DateWrapper>{date}</DateWrapper>
      </Details>
      <Button label={DEMO} variant="contained">
        <ArrowSvg />
      </Button>
    </DetailsWrapper>
    <Partition></Partition>
    <DiscussionWrapper>
      <DiscussionHeading>Discussion</DiscussionHeading>
      <PostCommentWrapper>
        <AvatarWrapper>
          <AvatarCard icon={AvatarIcon.src} width={20} height={20} />
        </AvatarWrapper>
        <InputWrapper>
          <TextInput placeholder={PlaceholderData?.commentTopic} control={control} name={'comment'} />
        </InputWrapper>
        <ButtonWrapper>
          <Button label={POST} variant="contained" />
        </ButtonWrapper>
      </PostCommentWrapper>
    </DiscussionWrapper>
    {comments?.map((items, index) => (
      <div key={index}>
        <Comments
          name={items?.name}
          time={items?.time}
          content={items?.content}
          likes={items?.likes}
          width={20}
          height={20}
        />
      </div>
    ))}
  </LatestDemosWrapper>
)

export default DemosComments
