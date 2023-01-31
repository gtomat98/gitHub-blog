import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

// interface Issue {
//   id: number
//   link: URL
//   title: string
//   userName: string
//   date: Date
//   comments: number
//   body: string
// }

interface PostIssue {
  title: string
  created_at: string
  body: string
}

interface User {
  avatar: string
  name: string
  githubProfile: URL

  biography: string

  userName: string
  employeeWhere: string
  followers: number
}

interface PostsContextType {
  user?: User
  posts: PostIssue[]
  // issue: Issue
}

interface PostsContextProviderProps {
  children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)

export function PostsProvider({ children }: PostsContextProviderProps) {
  const [user, setUser] = useState<User>()
  const [posts, setPosts] = useState<PostIssue[]>([])

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/gtomat98', {})

    setUser({
      avatar: response.data.avatar_url,
      biography: response.data.bio,
      name: response.data.name,
      employeeWhere: response.data.company,
      followers: response.data.followers,
      githubProfile: response.data.html_url,
      userName: response.data.login,
    })
  }, [])

  const fetchPosts = useCallback(async (query: string = '') => {
    const response = await api.get(
      `search/issues?q=${query}%20repo:gtomat98/gitHub-blog`,
      {},
    )

    setPosts(response.data.items)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <PostsContext.Provider value={{ user, posts }}>
      {children}
    </PostsContext.Provider>
  )
}
