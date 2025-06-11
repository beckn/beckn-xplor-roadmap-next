import { useState } from 'react'
import Button from 'components/Button'
import DownloadIcon from 'assets/svg/DownloadIcon'
import { DOWNLOAD } from 'constants/labels'
import { downloadLink } from 'utils/helper'
import { fetchData } from 'utils/getServerSideData'
import { DemosResponse } from 'interfaces'
import {
  DemosWrapper,
  Wrapper,
  HeadingWrapper,
  MainVideoWrapper,
  VideoWrapper,
  VideoImgWrapper,
  ImageWrapper,
  Text,
  ButtonWrapper,
  BackgroundWrapper,
} from 'styles/pages/demos'

const Demos = (alldashboardData: DemosResponse) => {
  const [currentVideoUrl, setCurrentVideoUrl] = useState<string | null>(null)
  const baseUrl = process.env.NEXT_PUBLIC_APP_BASE_URL?.split('/api')[0]
  const handleTogglePlay = (url: string) => {
    setCurrentVideoUrl(currentVideoUrl === url ? null : url)
  }

  return (
    <DemosWrapper>
      <Wrapper>
        <HeadingWrapper>Demos</HeadingWrapper>
        <MainVideoWrapper>
          {alldashboardData?.demosData[0]?.demos?.map(
            (
              item: {
                title: string
                demoLink: {
                  url: string
                }
              },
              index: number,
            ) => {
              const videoUrl = `${baseUrl}${item?.demoLink?.url}`
              return (
                <VideoWrapper key={index}>
                  <VideoImgWrapper>
                    <ImageWrapper>
                      <video
                        controls
                        onClick={() => handleTogglePlay(videoUrl)}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      >
                        <source src={videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </ImageWrapper>
                    {currentVideoUrl !== videoUrl && (
                      <BackgroundWrapper>
                        <Text>{item?.title}</Text>
                        <ButtonWrapper>
                          <Button label={DOWNLOAD} variant="outline" onClick={() => downloadLink(videoUrl)}>
                            <DownloadIcon />
                          </Button>
                        </ButtonWrapper>
                      </BackgroundWrapper>
                    )}
                  </VideoImgWrapper>
                </VideoWrapper>
              )
            },
          )}
        </MainVideoWrapper>
      </Wrapper>
    </DemosWrapper>
  )
}

export async function getServerSideProps(ctx: { query: { slug: string } }) {
  try {
    const demosData = await fetchData(`demos/${ctx?.query?.slug}`)

    return {
      props: {
        demosData: demosData.data,
      },
    }
  } catch (error) {
    return {
      props: {
        error: 'Failed to fetch milestones data',
      },
    }
  }
}

export default Demos
