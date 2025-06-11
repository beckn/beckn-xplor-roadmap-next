import AvatarCard from 'components/Avatar'
import AvatarIcon from 'assets/images/avatar.png'
import LikeSvg from 'assets/svg/LikeIcon'
import ReplySvg from 'assets/svg/ReplyIcon'
import { AvatarWrapper } from 'styles/views/Demos'
import { IComments } from './types'
import {
  ActionWrapper,
  CommentContent,
  CommentsWrapper,
  CommentTime,
  DetailsWrapper,
  LikesCount,
  LikesWrapper,
  NameWrapper,
} from 'styles/components/Comments'

const Comments = ({ name, time, content, likes, width, height }: IComments) => (
  <CommentsWrapper>
    <DetailsWrapper>
      <AvatarWrapper>
        <AvatarCard icon={AvatarIcon} width={width} height={height} />
      </AvatarWrapper>
      <NameWrapper>{name}</NameWrapper>
      <CommentTime>{time}</CommentTime>
    </DetailsWrapper>
    <CommentContent>{content}</CommentContent>
    <ActionWrapper>
      <LikesWrapper>
        <LikeSvg />
        <LikesCount>{likes} Likes</LikesCount>
      </LikesWrapper>
      <LikesWrapper>
        <ReplySvg />
        <LikesCount>Reply</LikesCount>
      </LikesWrapper>
    </ActionWrapper>
  </CommentsWrapper>
)

export default Comments
