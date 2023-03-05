import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAmM56O7h6_6-UCyv483vWdhlrjX9VABRs",
  authDomain: "miniblog-74bd9.firebaseapp.com",
  projectId: "miniblog-74bd9",
  storageBucket: "miniblog-74bd9.appspot.com",
  messagingSenderId: "421083034413",
  appId: "1:421083034413:web:751a8a08573381e15219a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db}