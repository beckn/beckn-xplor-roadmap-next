import styled from 'styled-components'
import { theme } from 'styles/theme'

export const DemosWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 16px 56px;
  background: ${theme.PRIMARYBACKGROUNDCOLOR};
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  padding: 32px 0;
`
export const HeadingWrapper = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`
export const DemoWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  background: ${theme.BOXCOLOR};
  box-shadow:
    0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -2px rgba(0, 0, 0, 0.05);
`
export const MainVideoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 30px;
  justify-items: center;
`
export const VideoWrapper = styled.div`
  width: 100%;
  max-width: 260px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const VideoImgWrapper = styled.div`
  height: 400px;
  position: relative;
`
export const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`
export const Text = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  padding: 0 12px;
  color: #ffffff;
`
export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  button {
    width: 240px;
    margin: 0 10px;
    gap: 6px;
    flex-direction: row-reverse;
    svg {
      top: 6px;
    }
  }
`
export const BackgroundWrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 150px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 1.5%, #000000 70%);
`
