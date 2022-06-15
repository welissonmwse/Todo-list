import LogoImg from '../../assets/logoTodo.svg'

import * as C from './styles'

export function Header(){
  return(
    <C.Header>
      <div>
        <img src={LogoImg} alt="Logo da empresa" />
      </div>
    </C.Header>
  )
}