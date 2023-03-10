import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css';
import logo from '../../img/costs_logo.png';

export default function Navbar() {
  return (
    <nav className={ styles.navbar }>
      <Container>
        <Link to="/">
          <img src={ logo } alt="costs"></img>
        </Link>
        <ul className={ styles.list }>
          <li className={ styles.item }>
            <Link to="/">Home</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/projects">projetos</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={ styles.item }>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Container>
  </nav>
  )
}
