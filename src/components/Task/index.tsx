import { Trash } from 'phosphor-react';
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
  onToggleTaskCompleted: (id: string) => void;
}

export function Task({task, onDeleteTask, onToggleTaskCompleted}: TaskProps){
  
  return(
    <C.Task isCompleted={task.isCompleted}>
      <Checkbox 
        checked={task.isCompleted} 
        onClick={() => onToggleTaskCompleted(task.id)}
      />
      <p>{task.title}</p>
      <button className="buttonTrash" onClick={() => onDeleteTask(task.id)}>
        <Trash size={20}/>
      </button>
    </C.Task>
  )
}