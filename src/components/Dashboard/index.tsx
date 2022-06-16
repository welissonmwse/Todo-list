import { useState } from 'react'
import { Form } from '../Form'
import { Header } from '../Header'

import ClipboardImg from '../../assets/clipboard.svg'


import * as C from './styles'
import { Task } from '../Task'

interface TaskType{
  id: string;
  title: string;
  isCompleted: boolean;
}

export function Dashboard(){

  const [tasks, setTasks] = useState<TaskType[]>([])

  function handleNewTask(task : TaskType){
    setTasks(state => [...state, task])
  }

  function deleteTask(id: string){
    const taskWithoutDeletedOne = tasks.filter(task => task.id !== id)
    setTasks(taskWithoutDeletedOne)
  }

  function toggleTaskCompleted(id: string){
    const taskStatusCompleted = tasks.map(task => {
      if(task.id === id){
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task
    })
    console.log(taskStatusCompleted)
    setTasks(taskStatusCompleted)
  }

  return(
    <C.Container>
      <Header/>
      <main>
        <Form onNewTask={handleNewTask}/>
        <header>
          <div>
            <p>Tarefas criadas</p>
            <span>0</span>
          </div>
          <div>
            <p>Tarefas criadas</p>
            <span>10</span>
          </div>
        </header>
        {tasks.length > 0 ? (
          <C.TodoList>
            {tasks.map(task => (
              <Task 
                key={task.id} 
                task={task} 
                onDeleteTask={deleteTask}
                onToggleTaskCompleted={toggleTaskCompleted}
              />
            ))}
          </C.TodoList>
        ):(
          <C.Content>
            <img src={ClipboardImg} alt="" />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </C.Content>
        )}
      </main>
    </C.Container>
  )
}