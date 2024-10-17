import "./CampoTexto.css"
import React from 'react'

interface CampoTextoProps {
  aoAlterado: (value: string) => void
  placeholder: string
  label: string
  valor: string
  obrigatorio?: boolean
  tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({ aoAlterado, label, placeholder, valor, obrigatorio = false, tipo = 'text' }: CampoTextoProps) => {
  
  const placeholderModificado = `${placeholder}...`

  const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
    aoAlterado(evento.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input 
       value={valor}
       onChange={aoDigitado}
       required={obrigatorio} 
       placeholder={placeholderModificado}/>
    </div>
  )
}

export default CampoTexto