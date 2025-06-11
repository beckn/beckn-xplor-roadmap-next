import Image from 'next/image'
import BackgroundPointingIcon from 'assets/images/notFoundImage.png'
import { MainNotFoundWrapper, ImageWrapper, ContentWrapper, ContentHeader, Content } from 'styles/pages/notFound'

const NotFound = () => {
  return (
    <MainNotFoundWrapper>
      <ImageWrapper>
        <Image src={BackgroundPointingIcon} alt="icon" />
      </ImageWrapper>
      <ContentWrapper>
        <ContentHeader>Page Not Found</ContentHeader>
        <Content>
          Oops! The page you're looking for couldn't be found. If you thinkthis is a problem with us, Please tell us.
        </Content>
      </ContentWrapper>
    </MainNotFoundWrapper>
  )
}

export default NotFound
