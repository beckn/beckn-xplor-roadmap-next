import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.BOXCOLOR}; //dark mode
  padding: 16px 24px;
  gap: 24px;
  border-radius: 12px;
  box-shadow: 0px 20px 52px 0px rgba(191, 191, 191, 0.18);
  border: 1px solid #e5e5e5;
`
export const HeadingWrapper = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${theme.TITLECOLOR};
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: ${theme.LINKCOLOR};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }
`

export const MilestonesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
`
export const CardWrapper = styled.div``
