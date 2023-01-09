import { useHistory } from 'react-router-dom';
import ProjectForm from '../projects/ProjectForm';
import styles from './NewProject.module.css';

export default function NewProject() {

  const history = useHistory();

  function creatPost(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/categories", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }).then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        // redirect
        history.push('/projects', {message: 'Projeto criado com sucesso!'})
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={ styles.newproject_container }>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={ creatPost } btnText="Criar Projeto" />
    </div>
  )
}
