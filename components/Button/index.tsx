import { IButtonProps } from './types'
import { StyledButton } from 'styles/components/Button'

const Button = ({ label, children, ...rest }: IButtonProps) => (
  <StyledButton {...rest}>
    {label}
    {children}
  </StyledButton>
)

export default Button
