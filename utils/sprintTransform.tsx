import React from 'react'
import moment from 'moment'
import type { CollapseProps } from 'antd'
import Sprint from 'views/Milestones/sprint'
import { IProgressData } from 'interfaces'
import { HeadingCollapse, DateWrapper } from 'styles/views/Releases'
import {
  StyledBlocksRenderer,
  RichTextContent,
  RichTextHeading,
  ImageCard,
  InnerWrapper,
  RichTextLink,
  RichTextOrderedList,
  RichTextList,
  RichTextListItem,
  TextItalic,
} from 'styles/pages/documentation/guide'

const generateProgressData = (count: {
  [key: string]: { doneCount: number; pendingCount: number; totalCount: number }
}): IProgressData[] => {
  const labels = Object?.keys(count)
  const values = Object?.values(count).map((ticket: any) => {
    const result = ticket.doneCount / ticket.totalCount
    return result * 100
  })

  return labels?.map((category: any, index: number) => {
    const percent = values[index]
    return {
      type: 'circle',
      steps: 0,
      percent: parseFloat(percent.toFixed(0)),
      trailColor: '#E1EFFE',
      strokeWidth: 6,
      strokeColor: calculateColor(percent),
      text: category,
    }
  })
}

const calculateColor = (percent: number): string => {
  if (percent >= 95) {
    return '#52c41a' // Green
  } else if (percent >= 75) {
    return '#14B8A6' // Blue
  } else if (percent >= 50) {
    return '#3B82F6' // Blue
  } else if (percent >= 25) {
    return '#F59E0B' // Yellow
  } else {
    return '#FACC15' // Orange
  }
}

const sortSprintProgressKeys = (sprintProgress: { [key: string]: any }): { [key: string]: any } => {
  const sortedKeys = ['Research & Design', 'Documentation', 'Development', 'Testing']
  const sortedSprintProgress: { [key: string]: any } = {}

  sortedKeys.forEach((key) => {
    if (sprintProgress.hasOwnProperty(key)) {
      sortedSprintProgress[key] = sprintProgress[key]
    }
  })

  return sortedSprintProgress
}

export const generateItemsFromApiData = (apiData: any[]): CollapseProps['items'] => {
  return apiData?.map((item, index) => {
    const sortedSprintProgress = sortSprintProgressKeys(item?.sprintProgress)

    return {
      key: item?._id,
      label: (
        <HeadingCollapse>
          Sprint {index + 1}: {item?.title}{' '}
          <DateWrapper>
            ({moment(item?.startDate).format('Do MMM')} - {moment(item?.endDate).format('Do MMM')})
          </DateWrapper>
        </HeadingCollapse>
      ),
      children: <Sprint data={generateProgressData(sortedSprintProgress)} />,
    }
  })
}

export const generateNotesData = (data: any): CollapseProps['items'] => {
  return data?.map((item: { id: string; title: string; content: any; publishedAt: string }) => ({
    key: item?.id,
    label: (
      <HeadingCollapse>
        <span>●</span> {item?.title} <DateWrapper>{moment(item?.publishedAt).format('Do MMM')}</DateWrapper>
      </HeadingCollapse>
    ),
    children: (
      <>
        <InnerWrapper>
          <StyledBlocksRenderer
            content={item?.content}
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
      </>
    ),
  }))
}
