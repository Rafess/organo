import "./Form.css";
import TextField from "../TextField/TextField";
import DropDownList from "../DropDownList/DropDownList";
import Button from "../Button/Button";
import { useState } from "react";

const Form = (props) => {
  const times = ['Programação', 'Front-End', 'Data Science', 'DevOps', 'UI/UX Design', 'Mobile', 'Compliance'];
  
  const [name, setName] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [team, setTeam] = useState('');

  

  const onSave = (event) => {
    event.preventDefault();
    props.onCollabRegister({
      name,
      cargo,
      imagem, 
      team
    })
  }
  return (
    <section className="form">
      <form onSubmit={onSave}>
        <h2> Preencha os dados para criar o card do Colaborador</h2>
        <TextField label="Nome" placeholder="Digite seu " value={name} onChange={value => setName(value)} />
        <TextField label="Cargo" placeholder="Digite seu " value={cargo} onChange={value => setCargo(value)} />
        <TextField label="Imagem" placeholder="Informe o endereço da " value={imagem} onChange={value => setImagem(value)}/>
        <DropDownList label="Time" itens={times} value={team} onChange={value => setTeam(value)}/>
        <Button>Criar Card</Button>
      </form>
    </section> 
  );
};

export default Form;