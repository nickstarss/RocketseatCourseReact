import { Header } from './components/Header'
import { Post } from "./components/Post"
import './global.css'

import styles from "./App.module.css"
import { Sidebar } from './components/Sidebar'

// informações de um falso backend
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/nickstarss.png",
      name: 'Giovanni Fiorini',
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},

      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é Aluga.ai 🚀 ',},

      {type: 'link', content: '👉 giullian.design/alugaai',},

      {type:'link', content: '#novoprojeto #nlw #rocketseat'},
    ],
    publishedAt: new Date('2024-05-01 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Laquinui.png",
      name: 'Laerte Quinui',
      role: "UI/UX Designer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋',},

      {type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ',},

      {type: 'paragraph', content: 'Acesse e deixe seu feedback',},

      {type:'link', content: '👉 laquinui.design'}
    ],
    publishedAt: new Date('2024-06-04 17:13:22'),
  }
]

function App() {

  return (
    <>
      <Header />
      
      <div className={ styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (

              <Post
                key={post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            
            )
          })}
        </main>
      </div>
    </>
  )
}

export default App


