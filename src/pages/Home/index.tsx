import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./styles";
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <ul>
        <li>
          <NavLink to='/post'>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</p>
          </NavLink>

        </li>
        <li>
          <NavLink to='/post'>
            <header>
              <h3>JavaScript data types and data structures</h3>
              <span>Há 1 dia</span>
            </header>
            <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in...</p>
          </NavLink>

        </li>
      </ul>
    </HomeContainer>
  )
}