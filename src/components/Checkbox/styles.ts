import styled from "styled-components"

export const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 1.25rem;
  cursor: pointer;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: ${({theme}) => theme.colors.purple_dark};
      border: none;
    }

    &:checked ~ span:hover {
      background-color: ${({theme}) => theme.colors.purple};
    }

    &:checked ~ span:after {
      display: block;
    }
  }

  span {
    position: absolute;
    top: 4px;
    left: 0;
    height: 1.0625rem;
    width: 1.0625rem;
    background-color: transparent;
    border-radius: 50%;
    border: 1px solid ${({theme}) => theme.colors.blue};

    transition: all 0.2s;

    &:after{
      content: '';
      position: absolute;
      display: none;
      left: 6px;
      top: 3px;
      width: 3px;
      height: 8px;
      border: solid ${({theme}) => theme.colors.gray_100};
      border-width: 0 1px 1px 0;
      transform: rotate(45deg);
    }

    &:hover {
      background-color: ${({theme}) => theme.colors.blue_dark};
    }
  }
`