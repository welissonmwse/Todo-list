import { Form } from '../Form'
import { Header } from '../Header'

import ClipboardImg from '../../assets/clipboard.svg'


import * as C from './styles'
import { Task } from '../Task'

export function Dashboard(){
  return(
    <C.Container>
      <Header/>
      <main>
        <Form/>
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
        {/* <C.Content>
          <img src={ClipboardImg} alt="" />
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </C.Content> */}
        <C.TodoList>
          <Task/>
          <Task/>
        </C.TodoList>
      </main>
    </C.Container>
  )
}