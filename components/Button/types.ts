import { ReactElement } from 'react'

//Button Component
export interface IButtonProps {
  label: ReactElement | string
  onClick?: () => void
  variant: 'contained' | 'text' | 'outline' | 'disabled'
  type?: 'button' | 'submit' | 'reset'
  children?: any
  className?: string
  disabled?: any
}
