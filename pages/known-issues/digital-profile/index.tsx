import Collapes from 'components/Collapse'
import { items } from 'constants/data/known-issues'
import { IssuesWrapper, HeadingWrapper, CollapesWrapper } from 'styles/pages/knownIssues/digitalProfileIssues'

const DigitalProfileIssues = () => (
  <IssuesWrapper>
    <HeadingWrapper>Known Issues</HeadingWrapper>

    {items?.map((item, index) => (
      <CollapesWrapper key={index}>
        <Collapes items={[item]} bordered={false} />
      </CollapesWrapper>
    ))}
  </IssuesWrapper>
)

export default DigitalProfileIssues
