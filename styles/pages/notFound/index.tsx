import { theme } from 'styles/theme'
import styled from 'styled-components'

export const MainNotFoundWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 32px;
  height: calc(100vh - 82px);
`
export const ImageWrapper = styled.div`
  padding-right: 40px;
  img {
    width: 100% !important;
    max-width: 800px !important;
    height: 413px !important;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  gap: 10px;
`
export const ContentHeader = styled.div`
  font-size: 40px;
  font-weight: 800;
  text-align: center;
  color: ${theme.TITLECOLOR};
`
export const Content = styled.div`
  font-size: 16px;
  font-weight: 400;
  width: 100%;
  max-width: 485px;
  text-align: center;
  color: ${theme.TITLECOLOR};
`
