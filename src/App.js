 import './App.scss';
 import { BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
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
import CreatePost from './pages/createPost/CreatePost';
import DashBoard from './pages/dashboard/DashBoard';

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
               <Route path='/login' element={!user ? <Login/> : <Navigate to="/" />} />
               <Route path='/register' element={!user ? <Register/> : <Navigate to="/" />} />
               <Route path='/posts/create' element={user ? <CreatePost/> : <Navigate to="/login" />}/>
               <Route path='/dashboard' element={user ? <DashBoard/> : <Navigate to="/login" />}/>
             </Routes>
          </div>
          <Footer/>
         </BrowserRouter>
       </AuthContextProvider>
    </div>
  );
}

export default App;
