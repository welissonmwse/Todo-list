import styled from 'styled-components'

export const Task = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.gray_500};

  margin-bottom: 0.75rem;

  p {
    font-size: 0.875rem;
    color: ${({theme}) => theme.colors.gray_100};
  }

  button {
    background: transparent;
    border: none;
    padding: 5px;
    border-radius: 4px;

    &:hover{
      background: ${({theme}) => theme.colors.gray_400};
    }
    
    img {
      &:hover{
        color: ${({theme}) => theme.colors.danger};

      }
    }
  }
`