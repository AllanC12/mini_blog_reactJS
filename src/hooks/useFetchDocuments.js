import { useState , useEffect } from "react";
import {db} from '../firebase/config';
import {collection , query , orederBy , onSnapshot , where} from 'firebase/firestore'

export const useFetchDocuments = (docCollection , search = null , uid= null) => {
    const [documents , setDocuments] = useState(null)
    const [loading,setLoading] = useState(null)
    const [error,setError] = useState(null)

    const [cancelled,setCancelled] = useState(false)

    useEffect(()=>{
      const loadData = async () => {
         if(cancelled) return

         setLoading(true)
         const collectionRef = await collection(db,docCollection)

         try {
            let q;
            q = await query(collectionRef,orderBy('createdAt','desc'))

            await onSnapshot(q, (querySnapshot) => {
                
            })
         } catch (error) {
            
         }
      }
    },[documents,search,uid,cancelled])
}