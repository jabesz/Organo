import React, { useState } from "react"; 
import CampoTexto from "../CampoTexto";
import Botao from "../Botao";
import "./Formulario.css";
import { IColaborador } from "../../shared/interface/IColaborador";
import ListaSuspensa from "../ListaSuspensa/Index";

interface FormularioProps {
  aoColaboradorCadastro: (colaborador: IColaborador) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {


  const [nome, setNome] = useState("")
  const [cargo, setCargo] = useState("")
  const [imagem, setImagem] = useState("")
  const [time, setTime] = useState("")
  const [data, setData] = useState("")
  

  const aoSalvar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoColaboradorCadastro({
      nome,
      cargo,
      imagem,
      time,
    })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  };

  return (
    <section className="formulario">
      <form onSubmit={evento => aoSalvar(evento)}>
        
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <CampoTexto 
          label = "Data de entrada no time"
          placeholder = ""
          valor={data}
          aoAlterado={valor => setData(valor)}
          tipo="date"
        />
        <ListaSuspensa
         obrigatorio={true}
         label="Time"
         itens={props.times}
         valor={time}
         aoAlterado={(valor: string) => setTime(valor)}
         />
        <Botao>
          Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;{}