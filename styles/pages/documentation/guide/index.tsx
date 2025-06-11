import { theme } from '@/styles/theme'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import styled from 'styled-components'
interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
}
export const Wrapper = styled.div`
  width: 100%;
  padding: 33px 86px;
  background: ${theme.PRIMARYBACKGROUNDCOLOR};
  color: #4b5563;
  display: flex;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const HeadingWrapper = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: 20px;
`
export const ContentWrapper = styled.div`
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const ProjectName = styled.div`
  color: ${theme.TITLECOLOR};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`
export const LinkContainer = styled.div``
export const LinkHeading = styled.div`
  color: ${theme.SECONDARYHEADING};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  padding: 9px 24px 9px 23.998px;
  border-radius: 12px 12px 0px 0px;
  border: 1px solid #e8e8e8;
  background: ${theme.BLUECOLOR};
  display: flex;
  justify-content: space-between;
`
export const LinkWrapper = styled.div`
  color: ${theme.SECONDARYHEADING};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  padding: 21px 24px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border: 1px solid #e8e8e8;
  background: ${theme.BOXCOLOR};
`
export const CopyLink = styled.div`
  cursor: pointer;
`
export const StyledBlocksRenderer = styled(BlocksRenderer)`
  margin: 20px;
  padding: 10px;
  background-color: #f5f5f5;
`
export const RichTextContent = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #4b5563;
  max-width: 700px;
  white-space: pre-wrap;
`

export const RichTextHeading = styled.h1<HeadingProps>`
  white-space: pre-wrap;
  font-size: ${({ level }) => {
    switch (level) {
      case 1:
        return '24px'
      case 2:
        return '22px'
      case 3:
        return '20px'
      case 4:
        return '18px'
      case 5:
        return '16px'
      case 6:
        return '14px'
      default:
        return '24px'
    }
  }};
  font-weight: ${({ level }) => {
    switch (level) {
      case 1:
        return '700'
      case 2:
        return '600'
      case 3:
        return '500'
      default:
        return '700'
    }
  }};
  color: ${theme.TITLECOLOR};
`
export const ImageCard = styled.img`
  width: 100%;
  max-width: 700px;
`
export const HeadingsWrapper = styled.div`
  width: 100%;
  flex: 1;
`
export const RichTextLink = styled.a`
  color: blue; /* Set your desired link color */
  text-decoration: underline; /* Add underline to the link */
`
export const RichTextList = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #4b5563;
  max-width: 700px;
  white-space: pre-wrap;
`
export const RichTextOrderedList = styled.ol`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  color: #4b5563;
  max-width: 700px;
  white-space: pre-wrap;
`
export const RichTextListItem = styled.ul``
export const TextItalic = styled.span`
  font-size: 14px;
  font-style: italic;
  font-weight: 400;
  line-height: 22px;
  color: #4b5563;
  max-width: 700px;
  white-space: pre-wrap;
`
