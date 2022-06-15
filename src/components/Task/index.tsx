import TrashImg from '../../assets/trash.svg'
import { Checkbox } from '../Checkbox'

import * as C from './styles'

export function Task(){
  return(
    <C.Task>
      <Checkbox/>
      <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
      <button>
        <img src={TrashImg} alt="" />
      </button>
    </C.Task>
  )
}