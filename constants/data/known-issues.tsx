import type { CollapseProps } from 'antd'
import { TextWrapper, DateWrapper } from 'styles/views/Releases'
import {
  HeadingCollapse,
  IssuesHeading,
  IssueContent,
  MainWrapper,
} from 'styles/pages/knownIssues/digitalProfileIssues'

export const text = (
  <MainWrapper>
    <TextWrapper>
      <IssuesHeading>Issue</IssuesHeading>
      <IssueContent>Digilocker is only for India.</IssueContent>
    </TextWrapper>
    <TextWrapper>
      <IssuesHeading>Release version</IssuesHeading>
      <IssueContent>3.3.13 </IssueContent>
    </TextWrapper>
    <TextWrapper>
      <IssuesHeading>Log files</IssuesHeading>
      <IssueContent>No response </IssueContent>
    </TextWrapper>
    <TextWrapper>
      <IssuesHeading>Screenshots</IssuesHeading>
      <IssueContent>No response</IssueContent>
    </TextWrapper>
  </MainWrapper>
)

export const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <HeadingCollapse>
        Digilocker is only for India <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '2',
    label: (
      <HeadingCollapse>
        Known Issue 2 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '3',
    label: (
      <HeadingCollapse>
        Known Issue 3 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '4',
    label: (
      <HeadingCollapse>
        Known Issue 4 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '5',
    label: (
      <HeadingCollapse>
        Known Issue 5 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
]
