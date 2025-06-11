import styled from 'styled-components'
import { theme } from 'styles/theme'

export const MilestoneBoardWrapper = styled.div`
  padding: 32px 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`
export const HeadingWrapper = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`
export const MilestoneCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`
export const CollapesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
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
    background: ${theme.BOXCOLOR};
  }
  .ant-collapse-content {
    padding: 8px 36px;
  }
`
export const ProgressWrapper = styled.div``
export const ProgressHeading = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`

export const SprintProgress = styled.div`
  display: flex;
  padding: 20px 0;
  gap: 24px;
  flex-wrap: wrap;
`
export const ProgressContainer = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 0.704px solid #e5e7eb;
  background: ${theme.BOXCOLOR};
`
export const Text = styled.div`
  color: ${theme.TEXTCOLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  text-transform: capitalize;
`
export const SprintInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`
export const DemoInfo = styled.div`
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const LineChartWrapper = styled.div`
  width: 100%;
`
export const CardWrapper = styled.div``
