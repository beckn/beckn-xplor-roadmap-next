import { theme } from 'styles/theme'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 31px 56px;
  background: ${theme.PRIMARYBACKGROUNDCOLOR};
`
export const HeadingWrapper = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: ${theme.TITLECOLOR};
  font-style: normal;
`
export const MilestoneCardWrapper = styled.div`
  padding-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`

export const CardWrapper = styled.div``
