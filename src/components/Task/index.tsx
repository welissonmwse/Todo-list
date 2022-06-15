import TrashImg from '../../assets/trash.svg'
import { Checkbox } from '../Checkbox'

import * as C from './styles'

interface TaskType{
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
  onDeleteTask: (id: string) => void;
}

export function Task({task, onDeleteTask}: TaskProps){
  
  return(
    <C.Task>
      <Checkbox checked={task.isCompleted}/>
      <p>{task.title}</p>
      <button onClick={() => onDeleteTask(task.id)}>
        <img src={TrashImg} alt="" />
      </button>
    </C.Task>
  )
}