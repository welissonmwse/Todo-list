import styled, { css } from "styled-components"

interface CheckboxProps{
  checked: boolean;
}

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 1.25rem;
  cursor: pointer;
`

export const Checkbox = styled.button<CheckboxProps>`
  position: relative;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.blue};

  transition: all 0.2s;

  ${({checked}) => checked && css`
    background-color: ${({theme}) => theme.colors.purple_dark};
    border: none;
  `}

  &:after{
    content: '';
    position: absolute;
    display: ${({checked}) => checked ? 'block' : 'none'};
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid ${({theme}) => theme.colors.gray_100};
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }

  &:hover {
    background-color: ${({theme, checked}) => checked ? theme.colors.purple : theme.colors.blue_dark};
  }
`