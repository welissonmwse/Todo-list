import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`
  :focus{
    outline: transparent;
    box-shadow: 0 0 4px ${({theme}) => theme.colors.blue_dark};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.colors.gray_600};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }
`