import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 8px;

  input{
    flex: 1;
    background: ${({theme}) => theme.colors.gray_500};
    color: ${({theme}) => theme.colors.gray_300};
    border: 1px solid ${({theme}) => theme.colors.gray_700};
    border-radius: 8px;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    input {
      width: 100%;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    background: ${({theme}) => theme.colors.blue_dark};
    color: ${({theme}) => theme.colors.gray_100};
    border-radius: 8px;
    padding: 1rem;
    border: none;

    transition: background-color .2s;
    
    &:hover {
      background: ${({theme}) => theme.colors.blue};
    }
  }
`