import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MainWrapper = styled.div``

export const LatestDemosWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  border-radius: 8px;
  border: 0.704px solid #e5e7eb;
  background: ${theme.BOXCOLOR}; //change when dark
  flex-direction: column;
`
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  button {
    height: 41px;
    max-width: 148px;
    gap: 10px;
  }
`
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`
export const DetailsHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.TEXTCOLOR};
`
export const DateWrapper = styled.div`
  color: ${theme.GRAYCOLOR};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`

export const DiscussionWrapper = styled.div`
  padding: 0 16px;
`
export const DiscussionHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding: 8px 0;
  color: ${theme.TEXTCOLOR};
`
export const Partition = styled.div`
  border-top: 1px solid #e5e7eb;
  margin-top: 16px;
`
export const PostCommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding-top: 16px;
`

export const InputWrapper = styled.div`
  width: 100%;
  input {
    height: 32px;
  }
`
export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 136px;
  button {
    height: 32px;
  }
`
export const AvatarWrapper = styled.div``
