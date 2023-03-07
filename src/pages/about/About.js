import { Link } from 'react-router-dom'
import styles from './About.module.scss'

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Projeto Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito com React no Front-end e Firebase no Back-end</p>
      <Link className="btn" to="/posts/create">Novo post</Link>
    </div>
  )
}

export default About