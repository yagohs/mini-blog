import styles from './Dashboard.module.css'

import { Link } from 'react-router-dom'

// hooks
import { useAuthValue } from '../../context/AuthContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'

const Dashboard = () => {
  const {user} = useAuthValue()
  const uid = user.uid

  const {documents: posts, loading} = useFetchDocuments("posts", null, uid)

  const deleteDocument = (id) => {

  }

  if (loading) {
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
        <h2>Dashboard</h2>
        <p>Gerencie os seus posts</p>
        {posts && posts.length === 0 ? (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className='btn' >Criar seu primeiro post</Link>
          </div>
        ) : (
          <>
            <div className={styles.post_header}>
              <span>Título</span>
              <span>Ações</span>
            </div>

            {posts && 
              posts.map((post) => <div key={post.id} className={styles.post_row}>
                <p>{post.title}</p>
                <div>
                    <Link to={`/posts/${post.id}`} className={styles.dashboard_button_outline}>Ver</Link>
                    <Link to={`/posts/edit/${post.id}`} className={styles.dashboard_button_outline}>Editar</Link>
                    <button className={styles.dashboard_button_outline_danger} onClick={() => deleteDocument(post.id)} >Excluir</button>
                  </div>
              </div>)}
          </>
        )}

        
    </div>
  )
}

export default Dashboard