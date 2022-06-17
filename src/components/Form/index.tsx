import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddImg from '../../assets/plus.svg'
import { TaskContext } from '../../context/TaskContext';
import * as C from './styles'

export function Form(){
  const { handleNewTask } = useContext(TaskContext)
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

    handleNewTask(task)
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