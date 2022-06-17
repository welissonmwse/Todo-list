import { Trash } from 'phosphor-react';
import { useTasks } from '../../hooks/useTasks';

import * as C from './styles'

interface TaskType{
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProps {
  task: TaskType;
}

export function Task({task}: TaskProps){
  const {deleteTask, toggleTaskCompleted} = useTasks()
  
  return(
    <C.Task isCompleted={task.isCompleted}>
      <C.Checkbox 
        checked={task.isCompleted} 
        onClick={() => toggleTaskCompleted(task.id)}
      />

      <p>{task.title}</p>
      
      <button 
        className="buttonTrash" 
        onClick={() => deleteTask(task.id)}
      >
        <Trash size={20}/>
      </button>
    </C.Task>
  )
}