import styled from 'styled-components'
import { theme } from 'styles/theme'

export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
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
export const CommentContent = styled.div`
  color: ${theme.COMMENTCOLOR};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`
export const ActionWrapper = styled.div`
  display: flex;
  gap: 12px;
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
export const CommentTime = styled.div`
  color: ${theme.LIKESCOLOR};
  color: var(--gray-500, #6b7280);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`
