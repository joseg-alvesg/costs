import { useEffect, useState } from 'react'

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css';

export default function ProjectForm({ btnText }) {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        'Content-Type': 'application.json'
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setcategories(data)
      })
      .catch((err) => console.log(err))
  })
  
  return (
    <form className={ styles.form }>
      <Input 
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Insira o orçamento toral"
      />
      <Select name="category_id" text="Selecione a categoria" options={ categories } />
      <SubmitButton text={ btnText } />
    </form>
  )
}
