import { Controller } from 'react-hook-form'
import { Input } from 'antd'
import { ITextInputContainer } from './types'
import { InputWrapper } from 'styles/components/TextInput'

const TextInput = ({
  placeholder,
  defaultValue,
  required,
  type,
  onFocus,
  onBlur,
  onWheel,
  name,
  control,
  prefix,
  disabled,
  error,
  className,
  handleInputChange,
  maxLength,
  onKeyDown,
  onKeyUp,
  inputRef,
  autocomplete,
  readOnly,
  suffix,
}: ITextInputContainer) => (
  <InputWrapper error={error}>
    <Controller
      render={({ field: { value, onChange } }) => (
        <Input
          type={type}
          placeholder={placeholder}
          required={required}
          value={value}
          defaultValue={defaultValue}
          readOnly={readOnly}
          onChange={(e) => {
            onChange(e.target.value)
            if (handleInputChange) handleInputChange(e.target.value) // Call the custom handleInputChange
          }}
          onFocus={onFocus}
          onBlur={onBlur}
          onWheel={onWheel}
          prefix={prefix}
          disabled={disabled}
          className={className}
          maxLength={maxLength}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          ref={inputRef}
          autoComplete={autocomplete}
          suffix={suffix}
        />
      )}
      control={control}
      name={name}
    />
  </InputWrapper>
)
export default TextInput
