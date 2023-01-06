import styles from './ProjectForm.module.css';

export default function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do projeto" />
      </div>
      <div>
        <input type="number" placeholder="Insira o orçamento toral" />
      </div>
      <div>
        <select name="category_id" id="">
          <option disabled>Seleciona a categoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Criar projeto" />
      </div>
    </form>
  )
}