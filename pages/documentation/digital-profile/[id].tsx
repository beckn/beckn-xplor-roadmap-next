import { fetchRichTextData } from '@/utils/getServerSideData'
import { type BlocksContent } from '@strapi/blocks-react-renderer'
import {
  Wrapper,
  StyledBlocksRenderer,
  RichTextContent,
  RichTextHeading,
  ImageCard,
  InnerWrapper,
  HeadingsWrapper,
  RichTextLink,
  RichTextOrderedList,
  RichTextList,
  RichTextListItem,
  TextItalic,
} from 'styles/pages/documentation/guide'

const DigitalProfileGuide = ({ allText }: any) => {
  const content: BlocksContent = allText?.data?.attributes?.content
  return (
    <Wrapper>
      <InnerWrapper>
        <StyledBlocksRenderer
          content={content}
          blocks={{
            paragraph: ({ children }) => <RichTextContent>{children}</RichTextContent>,
            image: ({ image }) => <ImageCard src={image?.url} alt="alt-img" />,
            heading: ({ children, level }) => {
              return <RichTextHeading level={level}>{children}</RichTextHeading>
            },
            list: ({ children, format }) => {
              return format === 'ordered' ? (
                <RichTextListItem>
                  <RichTextOrderedList>{children}</RichTextOrderedList>
                </RichTextListItem>
              ) : (
                <RichTextListItem>
                  <RichTextList>{children}</RichTextList>
                </RichTextListItem>
              )
            },
            link: ({ children, ...props }) => {
              const { url } = props
              return (
                <RichTextLink href={url} target="_blank">
                  {children}
                </RichTextLink>
              )
            },
          }}
          modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <TextItalic>{children}</TextItalic>,
          }}
        />
      </InnerWrapper>
      <HeadingsWrapper></HeadingsWrapper>
    </Wrapper>
  )
}

export async function getServerSideProps(ctx: { params: { id: string } }) {
  try {
    const allText = await fetchRichTextData(ctx?.params?.id)

    return {
      props: {
        allText,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch text',
      },
    }
  }
}

export default DigitalProfileGuide
