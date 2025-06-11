import styled from 'styled-components'
import { theme } from 'styles/theme'

interface IStyledButton {
  variant?: 'contained' | 'text' | 'outline' | 'disabled'
}

const getButtonStyles = ({ variant }: IStyledButton) => {
  switch (variant) {
    case 'contained':
      return `
      background: ${theme.PRIMARYBLUECOLOR};
      color: ${theme.WHITE};
      border: none;
      cursor: pointer;
      
      `
    case 'disabled':
      return `
      background: #F0F0F0;
      color: #818181;
      border: none;
      cursor: not-allowed      
      `

    case 'outline':
      return `
      background:transparent;
      color: ${theme.WHITE};
      border: 1px solid ${theme.WHITE};
      cursor: pointer;
      `
    case 'text':
      return `
      background:transparent;
      color: ${theme.PRIMARYBLUECOLOR};
      border: none;
      cursor: pointer;
      `
    default:
      return `
      background: ${theme.PRIMARYBLUECOLOR};
      color: #FFFFFF;
      border: none;
      cursor: pointer;
  `
  }
}

export const StyledButton = styled.button<IStyledButton>`
  ${({ variant }) => getButtonStyles({ variant })};
  width: 100%;
  height: 28px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
`
