import logo from 'assets/images/xplorLogo.png'
import Image from 'next/image'

import { LogoWrapper, MainLogoWrapper, NavbarWrapper, SubNavbarWrapper } from 'styles/components/Navbar'

const Navbar = () => (
  <NavbarWrapper>
    <SubNavbarWrapper>
      <MainLogoWrapper>
        <LogoWrapper>
          <Image src={logo} alt="xplor-logo" width={200} />
        </LogoWrapper>
      </MainLogoWrapper>
    </SubNavbarWrapper>
  </NavbarWrapper>
)

export default Navbar
