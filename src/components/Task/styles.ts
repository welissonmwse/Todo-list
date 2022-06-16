import styled from 'styled-components'

interface TaskProps{
  isCompleted: boolean;
}

export const Task = styled.div<TaskProps>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background: ${({theme}) => theme.colors.gray_500};

  margin-bottom: 0.75rem;

  p {
    flex: 1;
    font-size: 0.875rem;
    color: ${({theme, isCompleted}) => isCompleted ? theme.colors.gray_300 : theme.colors.gray_100};
    text-decoration: ${({isCompleted}) => isCompleted ? 'line-through' : 'solid'}
  }

  .buttonTrash {
    background: transparent;
    border: 0;
    line-height: 0;
    border-radius: 2px;
    transition: color .2s;

    &:hover{
      background: ${({theme}) => theme.colors.gray_400};
    }

    svg {
      color: ${({theme}) => theme.colors.gray_300};
    }
    
    svg:hover{
      color: ${({theme}) => theme.colors.danger};
    }
  }
`