import styles from './ProjectCard.module.css';

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
  return (
    <div>{name}</div>
  )
}
