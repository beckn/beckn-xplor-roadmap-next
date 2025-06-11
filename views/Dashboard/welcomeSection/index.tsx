import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Button from 'components/Button'
import ProgressComponent from 'components/Progress'
import { DETAILS } from 'constants/labels'
import PointingIcon from 'assets/images/pointing.png'
// import { data } from './data'
import { IWelcomeSection } from 'interfaces'
import {
  AllMilestonesContent,
  DetailsWrapper,
  MilestoneText,
  TextWrapper,
  LabelWrapper,
} from 'styles/components/MilestoneCard'
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  HeadingWrapper,
  ImageWrapper,
  // MainButtonWrapper,
  MainContantWrapper,
  MainMilestoneWrapper,
  MainProgressWrapper,
  PointingImageWrapper,
  ProgressHeading,
  ProgressWrapper,
  ProgressLabel,
  SubProgressWrapper,
} from 'styles/pages'

const WelcomeSection = ({ overallCompletion, milestoneData }: IWelcomeSection) => {
  const result = parseFloat(overallCompletion).toFixed(0)
  const [slug, setSlug] = useState('')
  const router = useRouter()
  useEffect(() => {
    const route = localStorage.getItem('slug')
    if (!route) return
    setSlug(route)
  }, [])
  return (
    <ContentWrapper>
      <Head>
        <title>Xplor-roadmap</title>
      </Head>
      <ImageWrapper>
        <PointingImageWrapper>
          <Image src={PointingIcon} alt="icon" />
        </PointingImageWrapper>
        <MainContantWrapper>
          <HeadingWrapper>Welcome to Beckn-Xplor</HeadingWrapper>
          <Content>
            Beckn-Xplor is not just another super-app, but rather a DPG designed to facilitate an AI-driven demand-side
            experience. It serves as a comprehensive solution for managing identity, assets, and transaction engagement,
            offering a centralized platform for users.
          </Content>
          {/* <MainButtonWrapper>
            <Button label={LEARNMORE} variant={'contained'} />
          </MainButtonWrapper> */}
        </MainContantWrapper>
      </ImageWrapper>
      <MainProgressWrapper>
        <ProgressHeading>Overall Progress</ProgressHeading>
        <ProgressWrapper>
          <SubProgressWrapper>
            <ProgressComponent
              type="dashboard"
              steps={4}
              percent={parseFloat(result)}
              trailColor="#EBF2FE"
              strokeWidth={20}
              strokeColor="#14B8A6"
            />
            <ProgressLabel>Project Completion</ProgressLabel>
          </SubProgressWrapper>

          <MainMilestoneWrapper>
            <MilestoneText>
              <DetailsWrapper>
                {milestoneData?.map((item: { text: string; color: string; completion: string }, index: number) => {
                  const resultForMilestone = parseFloat(item?.completion)
                  return (
                    <AllMilestonesContent key={index}>
                      <span style={{ color: item?.color }}>●</span>
                      <TextWrapper>
                        <LabelWrapper>{item?.text}</LabelWrapper>
                        <LabelWrapper>{resultForMilestone.toFixed(0)}%</LabelWrapper>
                      </TextWrapper>
                    </AllMilestonesContent>
                  )
                })}
              </DetailsWrapper>
            </MilestoneText>
          </MainMilestoneWrapper>
        </ProgressWrapper>
        <ButtonWrapper>
          <Button label={DETAILS} variant="contained" onClick={() => router.push(`/milestones?slug=${slug}`)} />
        </ButtonWrapper>
      </MainProgressWrapper>
    </ContentWrapper>
  )
}

export default WelcomeSection
