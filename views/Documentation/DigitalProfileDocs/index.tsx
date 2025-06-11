import CopyIcon from 'assets/svg/CopyIcon'
import Link from 'next/link'
import { data } from './data'
import { LinkContainer, LinkHeading, LinkWrapper, CopyLink } from 'styles/pages/documentation/guide'

const DigitalProfileDocs = () => {
  const handleCopyLink = (link: string) => {
    navigator.clipboard.writeText(link)
  }

  return (
    <>
      {data?.map((item, index: number) => (
        <LinkContainer key={index}>
          <LinkHeading>
            {item?.heading}
            <CopyLink onClick={() => handleCopyLink(item?.link)}>
              <CopyIcon />
            </CopyLink>
          </LinkHeading>
          <LinkWrapper>
            <Link href={item?.link} target="_blank">
              {item?.showLink}
            </Link>
          </LinkWrapper>
        </LinkContainer>
      ))}
    </>
  )
}

export default DigitalProfileDocs
