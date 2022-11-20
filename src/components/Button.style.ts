import styled from 'styled-components'

export type ButtonVariant = 'primarty' | 'secundary' | 'danger' | 'sucess'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonVariant = styled.button<ButtonContainerProps>`

    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;

    background-color: ${(props) => props.theme['gray-500']};
    color: ${(props) => props.theme.white};

    &:hover {


`
