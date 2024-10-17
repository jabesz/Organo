import './Botao.css'
import { ReactElement } from 'react'

interface ButtonProps {
  children: ReactElement | string
}

const Botao = (props: ButtonProps) => {
  return (
    <button className="botao">
      {props.children}
    </button>
  )
}

export default Botao