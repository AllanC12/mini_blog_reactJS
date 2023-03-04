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
   
   //memory leak
   //deal with memory leak
   const [cancelled,setCancelled] = useState(false)
   
   const checkIfIsCancelled = () =>{
        if(cancelled){
            return 
        }
   }

}