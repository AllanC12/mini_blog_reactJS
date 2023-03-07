import styles from './CreatePost.module.scss'

import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

const CreatePost = () => {
  
  const [title,setTitle] = useState('')
  const [image,setImage] = useState('')
  const [body,setBody] = useState('')
  const [tags,setTags] = useState([])
  const [formError,setFormError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
       <h2>Crie o seu post</h2>
       <p>Compartilhe suas ideias , exiba seus posts</p>
       <form onSubmit={handleSubmit}>

         <label>
            <span>Título:</span>
            <input type="text" 
              name='title'
              placeholder="Pense em um bom título" 
              onChange={(e) => setTitle(e.target.value)} 
              value={title}
            />
         </label>

         <label>
            <span>URL da imagem:</span>
            <input type="text" 
              name='image'
              placeholder="Insira a URL da imagem para seu post" 
              onChange={(e) => setImage(e.target.value)} 
              value={image}
            />
         </label>

         <label>
            <span>Conteúdo:</span>
            <textarea name="body" 
            onChange={(e) => setBody(e.target.value)} 
            value={body}></textarea>        
         </label>

         <label>
            <span>Tags:</span>
            <input type="text" 
              name='tags'
              placeholder="Insira suas tags separadas por vírgula" 
              onChange={(e) => setTags(e.target.value)} 
              value={tags}
            />
         </label>
            <button className="btn">Criar post</button>
            {/* {!loading && <button className="btn">Criar post</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>} */}
       </form>
   </div>
)
}

export default CreatePost