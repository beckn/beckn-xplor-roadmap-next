import { FieldError } from 'react-hook-form'
//Input Component
export interface ITextInputContainer {
  placeholder: string
  required?: boolean
  value?: string
  onChange?: () => void
  onFocus?: () => void
  type?: string
  onWheel?: () => void
  control: any
  name: string
  disabled?: boolean
  prefix?: any
  error?: FieldError
  className?: string
  handleInputChange?: any
  maxLength?: number
  onKeyDown?: any
  inputRef?: any
  onKeyUp?: any
  autocomplete?: string
  readOnly?: any
  onBlur?: any
  defaultValue?: any
  suffix?: any
}
