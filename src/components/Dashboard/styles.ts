import styled from 'styled-components'

export const Container = styled.div`
  main{
    width: 100%;
    max-width: 46rem;
    height: 12.5rem;
    margin: auto;
    margin-top: -1.6875rem;
    padding: 0 1rem;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 4rem;
      
      div {
        display: flex;
        align-items: center;
        gap: 8px;

        p {
          color: ${({theme}) => theme.colors.blue};
          font-size: 0.875rem;
          font-weight: 700;
        }

        span {
          background: ${({theme}) => theme.colors.gray_400};
          color: ${({theme}) => theme.colors.gray_100};
          padding: 2px 8px;
          border-radius: 999px;
        }
      }
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid ${({theme}) => theme.colors.gray_400};
  border-radius: 8px;
  margin-top: 1.5rem;
  padding: 4rem 1rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
  }

  p {
    font-weight: 700;
    color: ${({theme}) => theme.colors.gray_300};
  }

  span {
    color: ${({theme}) => theme.colors.gray_400};
  }
`

export const TodoList = styled.div`
  margin-top: 1.5rem;
`
