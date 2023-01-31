import { Profile } from './components/Profile'
import { SearchForm } from './components/SearchForm'
import { HomeContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'

export function Home() {
  const { posts } = useContext(PostsContext)
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.title}>
              <NavLink to="/post">
                <header>
                  <h3>{post.title}</h3>
                  <span>{post.created_at}</span>
                </header>
                <p>{post.body}</p>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </HomeContainer>
  )
}
