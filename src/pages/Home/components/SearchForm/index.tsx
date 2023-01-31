import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'
import { FormContainer } from './styles'

export function SearchForm() {
  const { posts } = useContext(PostsContext)
  return (
    <FormContainer>
      <fieldset>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </fieldset>
      <input type="text" placeholder="Buscar conteúdo" />
    </FormContainer>
  )
}
