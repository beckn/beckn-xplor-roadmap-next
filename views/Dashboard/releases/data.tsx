import type { CollapseProps } from 'antd'
import { HeadingCollapse, TextWrapper, TestList, DateWrapper } from 'styles/views/Releases'

export const text = (
  <TextWrapper>
    <TestList>1.12.13 Announcemen</TestList>
    <TestList>1.12.13 Release Note</TestList>
    <TestList>1.12.13 Change Log</TestList>
    <TestList>1.12.13 Breaking Changes</TestList>
    <TestList>1.12.13 Migrations</TestList>
  </TextWrapper>
)

export const items: CollapseProps['items'] = [
  {
    key: '1',
    label: (
      <HeadingCollapse>
        <span>●</span> 1.16.13 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '2',
    label: (
      <HeadingCollapse>
        <span>●</span> 1.15.13 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '3',
    label: (
      <HeadingCollapse>
        <span>●</span> 1.14.13 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '4',
    label: (
      <HeadingCollapse>
        <span>●</span> 1.14.13 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
  {
    key: '5',
    label: (
      <HeadingCollapse>
        <span>●</span> 1.14.13 <DateWrapper>28th, July</DateWrapper>
      </HeadingCollapse>
    ),
    children: text,
  },
]
