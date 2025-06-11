import styled from 'styled-components'
import { theme } from 'styles/theme'

export const ChartWrapper = styled.div`
  display: flex;
  padding: 36px 16px;
  flex-direction: column;
  justify-content: center;
  gap: 8.453px;
  border-radius: 8px;
  border: 2px solid #e5e7eb;
  background: ${theme.BOXCOLOR};
  box-shadow: 0px 0.704px 1.409px 0px rgba(0, 0, 0, 0.08);
`
export const Heading = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  color: ${theme.HEADINGCOLOR};
  padding-left: 25px;
  padding-bottom: 10px;
`
export const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`
export const LegendWrapper = styled.div`
  display: flex;
  gap: 8px;
`
export const LabelWrapper = styled.span`
  color: ${theme.LABELCOLOR};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`
export const LineChartWrapper = styled.div`
  min-height: 300px;
`
export const ActiveWrapper = styled.span`
  color: #14b8a6;
`
export const ExpectedWrapper = styled.span`
  color: #344bfd;
`
