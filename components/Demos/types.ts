import { Control } from 'react-hook-form'

interface IComments {
  name: string
  time: string
  content: string
  likes: number
}

export interface IDemoData {
  demoName: string
  date: string
  comments: IComments[]
  control: Control
}
