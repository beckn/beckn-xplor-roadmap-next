import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MainWrapper = styled.div``

export const LatestReleaseWrapper = styled.div`
  display: flex;
  padding: 16px 0;
  border-radius: 8px;
  border: 0.704px solid #e5e7eb;
  background: ${theme.BOXCOLOR}; //change when dark
  flex-direction: column;
`
export const CollapesWrapper = styled.div`
  .ant-collapse-header {
    flex-direction: row-reverse;
  }
  .ant-collapse-header-text {
    color: ${theme.COLLAPSECOLOR};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
  }
  .ant-collapse {
    background: none;
  }
  .ant-collapse-content {
    padding: 8px 36px;
  }
`
export const Wrapper = styled.div``
export const HeadingCollapse = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  span {
    color: ${theme.COLLAPSECOLOR};
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
  }
`
export const TextWrapper = styled.ul``
export const TestList = styled.li`
  color: ${theme.PRIMARYBLUECOLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`
export const DateWrapper = styled.div`
  color: ${theme.COLLAPSECOLOR};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  padding-top: 2px;
`
