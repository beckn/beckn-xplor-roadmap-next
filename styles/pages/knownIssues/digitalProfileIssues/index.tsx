import styled from 'styled-components'
import { theme } from 'styles/theme'

export const IssuesWrapper = styled.div`
  width: 100%;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`
export const HeadingWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color: ${theme.TITLECOLOR};
`
export const CollapesWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  border: 0.704px solid#e5e7eb;
  background: ${theme.BOXCOLOR};
  box-shadow: 0px 0.704px 1.409px 0px rgba(0, 0, 0, 0.08);
  .ant-collapse-header {
    flex-direction: row-reverse;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

export const IssuesHeading = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${theme.TEXTCOLOR};
`
export const IssueContent = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.TEXTCOLOR};
`
export const HeadingCollapse = styled.div`
  span {
    color: ${theme.COLLAPSECOLOR};
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
  }
`
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
