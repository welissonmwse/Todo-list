import AddImg from '../../assets/plus.svg'
import * as C from './styles'

export function Form(){
  return(
    <C.Form action="">
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button type="submit">
        Criar 
        <img src={AddImg} alt="Símbolo de mais" />
      </button>
    </C.Form>
  )
}