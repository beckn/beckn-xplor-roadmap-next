import DashboardIcon from 'assets/svg/DashboardIcon'
import MilestoneIcon from 'assets/svg/MilestoneIcon'
import DocumentationLogo from 'assets/svg/DocumentationLogo'
// import DiscussionIcon from 'assets/svg/DiscussionIcon'
// import IssueIcon from 'assets/svg/IssueIcon'
import NotesIcon from 'assets/svg/NotesIcon'
import DemosIcon from 'assets/svg/DemosIcon'
import { MenuItem } from './types'

export const MENU: MenuItem[] = [
  {
    title: 'Dashboard',
    link: `/`,
    icon: <DashboardIcon />,
    disabled: false,
    id: '/[slug]',
  },
  {
    title: 'Milestones',
    link: '/milestones',
    icon: <MilestoneIcon />,
    disabled: false,
    id: '/milestones',
  },
  {
    title: 'Demos',
    link: '/demos',
    icon: <DemosIcon />,
    disabled: false,
    id: '/demos',
  },
  {
    title: 'Release Notes',
    link: '/release-notes',
    icon: <NotesIcon />,
    disabled: false,
    id: '/release-notes',
  },
  // {
  //   title: 'Discussion Forum',
  //   link: '/discussion-forum',
  //   icon: <DiscussionIcon />,
  //   disabled: false,
  //   id: '/discussion-forum',
  // },
  {
    title: 'Documentation',
    link: '/documentation',
    icon: <DocumentationLogo />,
    disabled: false,
  },
  // {
  //   title: 'Known Issues',
  //   link: '/known-issues',
  //   icon: <IssueIcon />,
  //   disabled: false,
  //   submenu: [
  //     {
  //       title: 'Digital Profile and Wallet',
  //       link: '/known-issues/digital-profile',
  //     },
  //   ],
  // },
]
