import { useState , useEffect} from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

import styles from './Register.module.scss'


const Register = () => {

  const [displayName,setDisplayName] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword , setConfirmPassword] = useState('')
  const [error , setError] = useState('')

  const {createUser , error: authError , loading} = useAuthentication()
  
  const handleSubmit = async (e) =>{
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

    const response = await createUser(user)
 
    setError('')
    
    setDisplayName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')

   }

   useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])

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
          
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
       </form>
     </div>
    )
}

export default Register