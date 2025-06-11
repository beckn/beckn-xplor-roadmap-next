import styled from 'styled-components'
import { theme } from 'styles/theme'

export const NavbarWrapper = styled.div`
  display: flex;
  background: ${theme.BOXCOLOR}; //change it for dark mode
  justify-content: space-between;
  padding: 0px 8px;
  min-height: 80px;
  border-bottom: 1px solid #e5e7eb; //change it for dark mode
  width: 100%;
`
export const MainLogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111928;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
`

export const ThemeWrapper = styled.div`
  color: #111928;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-right: 8px;
`

export const SubNavbarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 388px;
  padding-left: 8px;
  @media (max-width: 1440px) {
    gap: 243px;
  }
  @media (max-width: 1024px) {
    gap: 80px;
  }
`
