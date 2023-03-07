import styles from './Login.module.scss'

import { useState , useEffect} from 'react'

import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

   const [email,setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error , setError] = useState('')

  const {login , error: authError , loading} = useAuthentication()
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    const user = {
       email,
       password
    }

    await login(user)
  
    setError('')
    
    setEmail('')
    setPassword('')
 
   }

   useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])


  return (
    <div className={styles.login}>
             <h2>Entrar</h2>
      <p>Faça login para prosseguir</p>
      <form onSubmit={handleSubmit}>

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


          
            {!loading && <button className="btn">Entrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
       </form>
    </div>
  )
}

export default Login