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

   useEffect(()=>{
    return () => setCancelled(true)
   },[])

  return {
   auth,
   error,
   loading,
   createUser
  }

}



