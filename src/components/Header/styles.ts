import styled from 'styled-components'

export const Header = styled.header`
  height: 12.5rem;
  background: ${({theme}) => theme.colors.gray_700};

  div{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 46rem;
    height: 12.5rem;
    margin: auto;

    img{
      width: 7.875rem;
      height: 3rem;
    }
  }
`