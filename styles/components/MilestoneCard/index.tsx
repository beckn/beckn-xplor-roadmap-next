import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Wrapper = styled.div`
  display: flex;
  padding: 16px;
  border-radius: 8px;
  border: 0.704px solid #e5e7eb;
  height: 215px;
  background: ${theme.BOXCOLOR}; //change when dark
  align-items: center;
`

export const DoughnutContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 16.5px;
  padding-left: 16px;
`
export const DetailsHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
`

export const DoughnutWrapper = styled.div`
  width: 100%;
  max-width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const HeadingWrapper = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 18.75px;
  color: ${theme.TITLECOLOR};
  font-style: normal;
`
export const ButtonWrapper = styled.div``
export const AllMilestonesContent = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 14.06px;
  display: flex;
  gap: 10px;
`
export const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`
export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const DoungnutText = styled.div`
  position: absolute;
`
export const SubDoungnutText = styled.div`
  font-size: 13.1px;
  font-weight: 500;
  color: ${theme.SECONDARYLABELCOLOR};
  font-style: normal;
`
export const SubDoungnut = styled.div`
  font-size: 26.21px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.SECONDARYHEADINGCOLORL};
`
export const MilestoneText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.5px;
`

export const LabelWrapper = styled.div`
  color: ${theme.LABELCOLOR};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  text-transform: capitalize;
`
