import { useState , useEffect} from 'react'

import styles from './Register.module.scss'


const Register = () => {

  const [displayName,setDisplayName] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [error , setError] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()
    
    const user = {
       displayName,
       email,
       password
    }

    if(password !== confirmPassword){
      setError('As senhas precisam ser iguais')
      return
    }

    setError('')


    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
   }

  return (
     <div className={styles.register}>
       <h1>Cadastro de usuário</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
          <label>
              <span>Nome:</span>
              <input type="text" 
              name="displayName" 
              required 
              placehoder="Nome do usuário"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              />
          </label>

          <label>
              <span>E-mail:</span>
              <input type="email" 
              name="email" 
              required 
              placehoder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />
          </label>

          <label>
              <span>Senha:</span>
              <input type="password" 
              name="password" 
              required 
              placehoder="Senha do usuário"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </label>


          <label>
              <span>Confirme sua senha:</span>
              <input type="password" 
              name="password" 
              required 
              placehoder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />
          </label>

          <input className="btn" type="submit" value="Cadastrar" />
          {error && <p className="error">{error}</p>}
      </form>
     </div>
    )
}

export default Register