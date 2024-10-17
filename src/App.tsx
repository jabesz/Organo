import { useState } from "react";
import Formulario from "./components/Formulario";
import Time from "./components/time";
import Banner from "./components/Banner";
import { IColaborador } from "./shared/interface/IColaborador";

function App() {

  const times = [
    {
      nome: "Progamação",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: "Front-End",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: "Devops",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: "UX e Desing",
      corPrimaria: '#DB6EEF',
      corSecundaria: '#FAE9F5',
    },
    {
      nome: "Mobile",
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      nome: "Inovação e gestão",
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    },
  ]

  const [colaboradores, setColaborador] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner addressImg="/img/banner.png"/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastro={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

    {times.map(time => <Time
      key={time.nome}
      nome={time.nome}
      corPrimaria={time.corPrimaria}
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
    />)}

    </div>
  );
}

export default App;
