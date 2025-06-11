export interface IDashboard {
  // heading: string
  transformedData: any
  allMilestone: any
}
export interface IMilestone {
  milestonesData: any
}

interface TaskCount {
  totalCount: number
  doneCount: number
}

interface Task {
  [key: string]: TaskCount
}

export interface BoardData {
  name: string
  _id: string
  count: Task
}

export interface IMilestoneSection {
  data: BoardData[]
}

export interface ISprintBoardData {
  name: string
  _id: string
  count: Task
  tickets: any
}

export interface ApiData {
  name: string
  _id: string
  count: {
    [key: string]: {
      totalCount: number
      doneCount: number
    }
  }
  sprintsData: {
    name: string
    _id: string
    boardId: string
    count: {
      [key: string]: {
        totalCount: number
        doneCount: number
      }
    }
  }[]
}

export interface IProgressData {
  type: 'circle' | 'line' | 'dashboard' | undefined
  steps: number
  percent: number
  trailColor: string
  strokeWidth: number | undefined
  strokeColor: string
  text: string
}

export interface IParams {
  params: { id: string }
}

interface Board {
  name: string
  _id: string
  sprints: []
}

interface Data {
  board: Board
}
export interface IMilestoneBoard {
  data: {
    data: Data
  }
}

interface IProgress {
  text: string
  color: string
  completion: string
}
export interface IWelcomeSection {
  overallCompletion: any
  milestoneData: IProgress[]
}

export interface MilestoneDataset {
  label: string
  data: number[]
  backgroundColor: string[]
  hoverOffset: number
  borderWidth?: number
}
export interface MilestoneChartData {
  labels: string[]
  datasets: MilestoneDataset[]
  id: number
  progress: number
  isActive: boolean
}

export interface MilestoneChartOptions {
  maintainAspectRatio: boolean
  responsive: boolean
  cutout: string
  plugins: {
    tooltip: {
      enabled: boolean
    }
    title: {
      display: boolean
      text: string
      fontSize: number
      fontColor: string
    }
  }
}

export interface IDashboardMilestone {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  milestoneId: string
  tickets: {
    [key: string]: TicketData
  }
}

interface TicketData {
  doneCount: number
  pendingCount: number
  totalCount: number
}

export interface ISprintChartData {
  id: number
  labels: string[]
  progress: number
  datasets: any[]
  isActive: boolean
}

interface ChartData {
  labels: (number | string)[]
  datasets: Dataset[]
}

interface Dataset {
  label: string
  data: number[]
  borderColor: string
  tension: number
  pointRadius: number
  borderWidth: number
}

export interface IMilestoneIdBoard {
  sprintCardData: ISprintChartData[]
  chartData: ChartData
  sprintData: IApiSprint[]
  milestoneTitle: string
}

export interface IApiSprint {
  id: number
  title: string
  startDate: string
  endDate: string
  status: string | null
  sprintId: string
  createdAt: string
  updatedAt: string
  publishedAt: string | null
  milestone: IApiMilestone
  demos: any[]
  release_notes: any[]
  sprintProgress: { [key: string]: TicketData }
  progress: { [date: string]: TicketData }
}

interface IApiMilestone {
  id: number
  title: string
  milestoneId: string
  createdAt: string
  updatedAt: string
  publishedAt: string | null
}

export interface IReleaseNote {
  id: number
  title: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  content: any[]
}

interface DemosData {
  id: number
  title: string
  description: string
  slug: string
  projectId: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  demos: any[]
}

export interface DemosResponse {
  demosData: DemosData[]
}
