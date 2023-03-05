 import './App.scss';
 import { BrowserRouter , Routes , Route} from 'react-router-dom'
 import { onAuthStateChanged } from 'firebase/auth';

 //context
 import { AuthContextProvider } from './context/authContext';

 //hooks
 import { useState ,useEffect } from 'react';
 import { useAuthentication } from './hooks/useAuthentication';

 //pages
import Home from './pages/home/Home';
import About from './pages/about/About';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  
  const [user,setUser] = useState(undefined)
  const loadingUser = user === undefined

  const {auth} = useAuthentication()

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[auth])
  
  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
       <AuthContextProvider value={{user}}>
        <BrowserRouter>
          <Navbar/>
           <div className="container">
             <Routes>
               <Route path='/' element={<Home/>} />
               <Route path='/about' element={<About/>} />
               <Route path='/login' element={<Login/>} />
               <Route path='/register' element={<Register/>} />
             </Routes>
          </div>
          <Footer/>
         </BrowserRouter>
       </AuthContextProvider>
    </div>
  );
}

export default App;
