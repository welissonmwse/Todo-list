import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddImg from '../../assets/plus.svg'
import * as C from './styles'

interface Task{
  id: string;
  title: string;
  isCompleted: boolean;
}
interface FormProps{
  onNewTask: (task: Task) => void;
}

export function Form({onNewTask}: FormProps){
  const [newTaskText, setNewTaskText] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    setNewTaskText(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const task = {
      id: uuidv4(),
      title: newTaskText,
      isCompleted: false,
    }

    onNewTask(task)
    setNewTaskText('')
  }

  return(
    <C.Form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder='Adicione uma nova tarefa'
        value={newTaskText}
        onChange={handleNewTaskChange}
      />

      <button type="submit">
        Criar 
        <img src={AddImg} alt="Símbolo de mais" />
      </button>
    </C.Form>
  )
}