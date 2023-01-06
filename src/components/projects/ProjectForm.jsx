import Input from '../form/Input';
import styles from './ProjectForm.module.css';

export default function ProjectForm() {
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
      <div>
        <select name="category_id" id="">
          <option disabled>Seleciona a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form> //comentario
  )
}
