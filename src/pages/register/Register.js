import { useState , useEffect} from 'react'

import styles from './Register.module.scss'


const Register = () => {
  return (
     <div>
       <h1>Cadastro de usuário</h1>

      <form>
          <label>
              <span>Nome:</span>
              <input type="text" name="displayName" required placehoder="Nome do usuário"/>
          </label>

          <label>
              <span>E-mail:</span>
              <input type="email" name="email" required placehoder="E-mail do usuário"/>
          </label>

          <label>
              <span>Senha:</span>
              <input type="password" name="password" required placehoder="Senha do usuário"/>
          </label>


          <label>
              <span>Confirme sua senha:</span>
              <input type="password" name="password" required placehoder="Confirme sua senha"/>
          </label>

          <input className="btn" type="submit" value="Cadastrar" />
      </form>
     </div>
    )
}

export default Register