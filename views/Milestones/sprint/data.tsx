import { IProgressData } from './types'

export const progressData: IProgressData[] = [
  {
    type: 'circle',
    steps: 0,
    percent: 100,
    trailColor: '#E1EFFE',
    strokeWidth: 6,
    strokeColor: '#14B8A6',
    text: 'Sprint & Design',
  },
  {
    type: 'circle',
    steps: 0,
    percent: 75,
    trailColor: '#E1EFFE',
    strokeWidth: 6,
    strokeColor: '#3B82F6',
    text: 'Development & Testing',
  },
  {
    type: 'circle',
    steps: 0,
    percent: 55,
    trailColor: '#E1EFFE',
    strokeWidth: 6,
    strokeColor: '#F59E0B',
    text: 'Documentation',
  },
  {
    type: 'circle',
    steps: 0,
    percent: 25,
    trailColor: '#E1EFFE',
    strokeWidth: 6,
    strokeColor: '#FACC15',
    text: 'Ready for Production',
  },
]
