import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.scss' 

import { useAuthentication } from '../hooks/useAuthentication'

import {useAuthContext} from '../context/authContext'


const Navbar = () => {

  const {user} = useAuthContext()


  return (
      <nav className={styles.navbar}>
         <NavLink className={styles.brand} to="/">
             Mini <span>Blog</span>
         </NavLink>
         <ul className={styles.links_list}>
            <li>
                <NavLink to="/" className={({isActive}) => isActive ? styles.active : ''}>Home</NavLink>
            </li>

            {!user && (
                <>
             <li>
                <NavLink to="/login" className={({isActive}) => isActive ? styles.active : ''}>Entrar</NavLink>
            </li>
            <li>
                <NavLink to="/register" className={({isActive}) => isActive ? styles.active : ''}>Cadastrar</NavLink>
            </li>
                </>
            )}
   
            <li>
                <NavLink to="/about" className={({isActive}) => isActive ? styles.active : ''}>Sobre</NavLink>
            </li>
         </ul>
      </nav>
    )
}

export default Navbar