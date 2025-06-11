import styled from 'styled-components'

export const Container = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 13px 56px;
  background: #fdfdfd; //dark mode
`
export const HeadingWrapper = styled.div`
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color: #1f2633; //dark theme
  padding-bottom: 32px;
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const QuestionWrapper = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  color: #1f2633; //dark theme
  padding-bottom: 20px;
`
export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
export const Wrapper = styled.div`
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  color: #4b5563; //dark theme
  line-height: 22px;
`
export const CopyLinkWrapper = styled.div`
  border: 2px solid black;
`
