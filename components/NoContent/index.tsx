import FileIcon from 'assets/svg/FileIcon'
import { MainContainer, SubContainer, SvgWrapper, ErrorWrapper, ErrorMessageWrapper } from 'styles/components/NoContent'

const NoData = ({ heading, message }: { heading: string; message: string }) => (
  <MainContainer>
    <SubContainer>
      <SvgWrapper>
        <FileIcon />
      </SvgWrapper>
      <ErrorWrapper>{heading}</ErrorWrapper>
      <ErrorMessageWrapper>{message}</ErrorMessageWrapper>
    </SubContainer>
  </MainContainer>
)

export default NoData
