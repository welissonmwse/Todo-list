import styled, {css} from 'styled-components'

interface TaskProps{
  isCompleted: boolean;
}
interface CheckboxProps{
  checked: boolean;
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
    background-color: ${({theme}) => theme.colors.blue_dark};
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
    background-color: ${({theme, checked}) => checked ? theme.colors.blue : theme.colors.blue_dark};
  }
`