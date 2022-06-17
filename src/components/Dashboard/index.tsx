import { useTasks } from '../../hooks/useTasks'
import { Header } from '../Header'
import { Form } from '../Form'
import { Task } from '../Task'

import ClipboardImg from '../../assets/clipboard.svg'

import * as C from './styles'

export function Dashboard(){
  const {countTasksCompleted, tasks} = useTasks()
  
  return(
    <C.Container>
      <Header/>
      <main>
        <Form/>
        <header>
          <div>
            <p>Tarefas criadas</p>
            <span>{tasks.length}</span>
          </div>
          <div>
            <p>Concluídas</p>
              {countTasksCompleted > 0 ? (
                <span>
                    {countTasksCompleted} de {tasks.length}
                </span>
              ) : (
                <span>
                    {countTasksCompleted}
                </span>
              )}
          </div>
        </header>
        {tasks.length > 0 ? (
          <C.TodoList>
            {tasks.map(task => (
              <Task 
                key={task.id} 
                task={task} 
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