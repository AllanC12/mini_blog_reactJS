import styles from './Home.module.scss'

//hooks
import { useState } from 'react' 
import {useNavigate , Link} from 'react-router-dom'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

//components

const Home = () => {

  const [query,setQuery] = useState('')
 
  const {documents: posts, loading} = useFetchDocuments("posts")
 
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
       <div className={styles.home}>
         <h1>Veja posts recentes</h1>
         <form className={styles.search_form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Ou busque por tags" onChange={(e)=> setQuery(e.target.value)}/>
            <button className="btn btn-dark">Pesquisar</button>
         </form>
            <h1>Posts...</h1>

         <div>
            {loading && <p>Carregando...</p>}
            {posts && posts.map((post) => <h3>{post.title}</h3>)}
            {posts && posts.length === 0 &&(
               <div className={styles.noposts}>
                  <p>Não foram encontrados posts</p>
                  <Link to="/posts/create" className="btn">Crie o primeiro</Link>
               </div>
            )}
         </div>
       </div>
    )
}

export default Home