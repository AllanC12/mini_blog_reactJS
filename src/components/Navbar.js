import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss' 



const Navbar = () => {
  return (
      <nav className={styles.navbar}>
         <NavLink className={styles.brand} to="/">
             Mini <span>Blog</span>
         </NavLink>
         <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Início</NavLink>
            </li>
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>Sobre</NavLink>
            </li>
         </ul>
      </nav>
    )
}

export default Navbar