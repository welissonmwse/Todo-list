import { useState } from 'react';
import * as C from './styles'

interface CheckboxProps{
  checked: boolean;
  onClick: () => void;
}

export function Checkbox({checked, onClick}: CheckboxProps){

  return(
    // <C.Container onClick={onClick}>
    //   {/* <input type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)}/> */}
    // </C.Container>
      <C.Checkbox checked={checked} onClick={onClick}></C.Checkbox>
  )
}