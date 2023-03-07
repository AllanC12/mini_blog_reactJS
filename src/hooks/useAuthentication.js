import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import {useState , useEffect} from 'react'

export const useAuthentication = () =>{

   const [error,setError] = useState(null)
   const [loading,setLoading] = useState(null)
   
   //clean up 
   const [cancelled,setCancelled] = useState(null)
   
   const checkIfIsCancelled = () => {
     if(cancelled){
        return 
     }
   }
   
   const auth = getAuth()
   
   const createUser = async (data) => {
       checkIfIsCancelled()
       
       setLoading(true)
       setError(null)

     try {
        const {user} = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )

        updateProfile(user, {
            displayName: data.displayName
        })

        setLoading(false)

        return user

     } catch (error) {

        let systemErrorMessage

        if(error.message.includes('6 characters')){
           systemErrorMessage = 'A senha deve conter no mínimo 6 caracteres'
        }else if(error.message.includes('email-already')){
          systemErrorMessage = 'Usuário ja cadastrado'
        }else{
          systemErrorMessage = 'Ocorreu um erro , tente mais tarde'
        }

        setError(systemErrorMessage)
        setLoading(false)
     }

   }

   //logout -sign out
   const logout = () => {
     checkIfIsCancelled()
     signOut(auth)

   }

   //login-sign in
   const login = async (data) =>{
     checkIfIsCancelled()
     setLoading(true) 
     setError(false)
    
     try {
       
       await signInWithEmailAndPassword(auth,data.email,data.password)
       setLoading(false)

     } catch (error) {
      
      let systemErrorMessage

      if(error.message.includes('user-not-found')){
         systemErrorMessage = 'Usuário não encontado...'
      }else if(error.message.includes('wrong-password')){
        systemErrorMessage = 'Senha incorreta...'
      }else{
        systemErrorMessage = 'Ocorreu um erro , tente novamente mais tarde'
      }

      setError(systemErrorMessage)
      setLoading(false)

     }
   }

   useEffect(()=>{
     return () => setCancelled(true)
   },[])

  return {
   auth,
   error,
   loading,
   createUser,
   logout,
   login
  }

}



