// import { useForm } from 'react-hook-form'
// import AvatarCard from 'components/Avatar'
// import TextInput from 'components/TextInput'
import NoData from 'components/NoContent'
// import Button from 'components/Button'
// import LikeIcon from 'assets/svg/LikeIcon'
// import ReplyIcon from 'assets/svg/ReplyIcon'
// import { POST } from 'constants/labels'
// import { PlaceholderData } from 'constants/placeholder'
import {
  // AvatarWrapper,
  // ButtonWrapper,
  DiscussionWrapper,
  HeadingWrapper,
  DiscussionContainer,
  // PostWrapper,
  // InputWrapper,
  // CurrentPostWrapper,
  // DetailsWrapper,
  // NameWrapper,
  // CommentTime,
  // DiscussionHeading,
  // DiscussionContent,
  // LikesReplySection,
  // LikesWrapper,
  // LikesCount,
} from 'styles/pages/discussionForum'

const DiscussionForum = () => {
  // const { control } = useForm()
  return (
    <DiscussionWrapper>
      <HeadingWrapper>Discussions</HeadingWrapper>
      <DiscussionContainer>
        {/* <PostWrapper>
          <AvatarWrapper>
            <AvatarCard icon={''} height={0} width={0} />
          </AvatarWrapper>
          <InputWrapper>
            <TextInput placeholder={PlaceholderData?.discussion} control={control} name={'comment'} />
          </InputWrapper>
          <ButtonWrapper>
            <Button label={POST} variant="contained" />
          </ButtonWrapper>
        </PostWrapper> */}
        {/* {false ? (
          <CurrentPostWrapper>
            <DetailsWrapper>
              <AvatarCard icon={''} width={20} height={20} />
              <NameWrapper>Aarav Singh</NameWrapper>
              <CommentTime>14 min</CommentTime>
            </DetailsWrapper>
            <DiscussionHeading>How I can use this Api in my application?</DiscussionHeading>
            <DiscussionContent>
              The interface is intuitive, and the features are robust. I can definitely see this software making a huge
              impact in the industry.
            </DiscussionContent>
            <LikesReplySection>
              <LikesWrapper>
                <LikeIcon />
                <LikesCount>1 Likes</LikesCount>
              </LikesWrapper>
              <LikesWrapper>
                <ReplyIcon />
                <LikesCount>15 Reply</LikesCount>
              </LikesWrapper>
            </LikesReplySection>
          </CurrentPostWrapper>
        ) : ( */}
        <NoData
          heading="No Discussion Available!"
          message="There are currently no discussions to display. Please check back later for updates."
        />
        {/* )} */}
      </DiscussionContainer>
    </DiscussionWrapper>
  )
}

export default DiscussionForum
