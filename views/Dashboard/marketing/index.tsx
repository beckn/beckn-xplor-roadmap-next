import React from 'react'
import { MainWrapper, VideoWrapper } from 'styles/views/Marketing'

const MarketingSection = () => (
  <MainWrapper>
    <VideoWrapper controls autoPlay loop muted>
      <source
        src="https://xplor-beckn-xplor.thewitslab.com/uploads/V2_30_April_430_8c64157bba_a1106b0f51.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </VideoWrapper>
  </MainWrapper>
)

export default MarketingSection
