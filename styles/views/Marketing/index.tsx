import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ececec;
  /* #ececec */
  /* padding: 16px 24px; */
  gap: 24px;
  border-radius: 12px;
  box-shadow: 0px 20px 52px 0px rgba(191, 191, 191, 0.18);
  border: 1px solid #e5e5e5;
  height: 500px;
`
export const VideoWrapper = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 12px;
  max-height: 500px;
`
