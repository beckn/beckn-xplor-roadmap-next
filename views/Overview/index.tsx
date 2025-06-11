import {
  AnswerWrapper,
  Container,
  ContentWrapper,
  CopyLinkWrapper,
  HeadingWrapper,
  QuestionWrapper,
  Wrapper,
} from 'styles/views/Overview'

const Overview = () => (
  <Container>
    <HeadingWrapper>Overview</HeadingWrapper>
    <ContentWrapper>
      <QuestionWrapper>What is Beckn-Xplor?</QuestionWrapper>
      <AnswerWrapper>
        <Wrapper>
          Beckn-Xplor is not just another super-app, but rather a DPG designed to facilitate an AI-driven demand-side
          experience. It serves as a comprehensive solution for managing identity, assets, and transaction engagement,
          offering a centralized platform for users.
        </Wrapper>
        <Wrapper>
          Built on a modular infrastructure, Beckn-Xplor is accessible to global implementers, providing a versatile
          foundation for innovation and customization. Implementers can leverage this infrastructure to develop
          contextually relevant solutions tailored to the needs of their target consumers, delivering enhanced value and
          personalized experiences.
        </Wrapper>
      </AnswerWrapper>
    </ContentWrapper>
    <CopyLinkWrapper></CopyLinkWrapper>
  </Container>
)

export default Overview
