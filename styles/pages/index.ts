import styled from 'styled-components'
import BackgroundIcon from 'assets/images/background.png'
import { theme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  width: 100%;
  background: #fafbfc; //change dark
  padding: 16px 56px;
  flex-direction: column;
  gap: 38px;
`
export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`
export const ImageWrapper = styled.div`
  width: 100%;
  border-radius: 12px;
  display: flex;
  background-image: url(${BackgroundIcon.src});
  background-size: cover;
  @media (max-width: 1440px) {
    max-width: 700px;
    min-height: 220px;
  }
`
export const PointingImageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 30px;
`

export const HeadingWrapper = styled.div`
  font-size: 32px;
  font-weight: 600;
  padding-top: 16px;
  color: ${theme.HEADINGCOLOR}; //change when dark
`

export const Content = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #4b5563; //change when dark
  padding-right: 10px;
`
export const MainContantWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px 0;
`
export const MainProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 439px;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  background: ${theme.BOXCOLOR}; //change when dark

  @media (max-width: 1440px) {
    max-width: 339px;
    justify-content: space-evenly;
  }
`
export const ProgressHeading = styled.div`
  color: #1f2633; //change when dark
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  padding: 16px 24px;
`
export const ProgressWrapper = styled.div`
  padding: 0 24px;
  display: flex;
  gap: 16px;
  @media (max-width: 1150px) {
    display: flex;
    flex-wrap: wrap;
  }
`
export const MainMilestoneWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding-top: 14px;
`
export const ButtonWrapper = styled.div`
  padding: 8px 24px;
`
export const LatestDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`
export const MainButtonWrapper = styled.div`
  max-width: 176px;
  button {
    height: 40px;
  }
`
export const SubProgressWrapper = styled.div`
  position: relative;
  .ant-progress-text {
    color: #292929;
    font-size: 16px;
    font-style: normal;
    font-weight: 800;
  }
`
export const ProgressLabel = styled.div`
  color: #292929;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  position: absolute;
  bottom: 15px;
  left: 40px;
  max-width: 40px;
  text-align: center;
  opacity: 0.5;
`
