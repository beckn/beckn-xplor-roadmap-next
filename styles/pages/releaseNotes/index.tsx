import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MainWrapper = styled.div`
  background: ${theme.PRIMARYBACKGROUNDCOLOR};
  width: 100%;
  padding: 16px 56px;
  display: flex;
  justify-content: center;
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const HeadinWrapper = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
`
export const CollapesWrapper = styled.div`
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
