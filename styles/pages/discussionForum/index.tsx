import styled from 'styled-components'
import { theme } from 'styles/theme'

export const DiscussionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 56px;
  background: ${theme.PRIMARYBACKGROUNDCOLOR};
`
export const HeadingWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  font-size: 32px;
  font-weight: 700;
  color: ${theme.TITLECOLOR};
  padding: 32px 0;
`
export const DiscussionContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const InputWrapper = styled.div`
  width: 100%;
  input {
    height: 40px;
  }
`
export const PostWrapper = styled.div`
  display: flex;
  gap: 8px;
`
export const AvatarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .ant-avatar {
    height: 40px;
    width: 40px;
  }
`
export const ButtonWrapper = styled.div`
  width: 100%;
  max-width: 136px;
  button {
    height: 40px;
  }
`
export const CurrentPostWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 16px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  opacity: 0px;
  background: ${theme.WHITE};
  box-shadow: 0px 20px 52px 0px #bfbfbf2e;
`
export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
export const NameWrapper = styled.div`
  color: ${theme.NAMECOLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`
export const CommentTime = styled.div`
  color: ${theme.LIKESCOLOR};
  color: var(--gray-500, #6b7280);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`
export const DiscussionHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.TEXTCOLOR};
`
export const DiscussionContent = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${theme.LIKESCOLOR};
`

export const LikesReplySection = styled.div`
  display: flex;
  gap: 14px;
`
export const LikesWrapper = styled.div`
  display: flex;
  gap: 4px;
`
export const LikesCount = styled.div`
  color: ${theme.LIKESCOLOR};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`
