import { PropsWithChildren, ReactNode } from 'react'
import { useRouter } from 'next/router'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import { DashboardWrapper, DetailWrapper, Container, ContentContainer } from 'styles/components/Layouts'

const Layout = ({ children }: PropsWithChildren<{ children: ReactNode }>) => {
  const router = useRouter()
  const isCustom404Page = router.route === '/404'
  return (
    <DashboardWrapper>
      <DetailWrapper>
        <Container>
          <Navbar />
          <ContentContainer>
            {!isCustom404Page && <Sidebar />}
            {children}
          </ContentContainer>
        </Container>
      </DetailWrapper>
    </DashboardWrapper>
  )
}

export default Layout
