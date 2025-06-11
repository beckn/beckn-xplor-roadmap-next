import styled from 'styled-components'
import { theme } from 'styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${theme.BOXCOLOR}; //dark mode
  gap: 24px;
  border-radius: 12px;
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
export const RepositoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid #e5e7eb;
  background: ${theme.BOXCOLOR};
`

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 16px 8px 16px;
  gap: 16px;
`
export const RepoHeadingWrapper = styled.div`
  color: ${theme.LINKCOLOR};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
`

export const RepoDateWrapper = styled.div`
  display: flex;
  padding: 4px 10px;
  align-items: center;
  gap: 15px;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  color: #57606a;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`
export const RepoInfo = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  color: ${theme.GRAYCOLOR};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`
export const ActionsWrapper = styled.div`
  display: flex;
  padding: 8px 16px 16px 16px;
  align-items: center;
  gap: 15px;
`

export const IconWrapper = styled.div`
  display: flex;
  gap: 12px;
`
