import * as C from './styles'

interface CheckboxProps{
  checked: boolean;
}

export function Checkbox({checked}: CheckboxProps){
  return(
    <C.Container>
      <input type="checkbox" checked={checked}/>
      <span></span>
    </C.Container>
  )
}