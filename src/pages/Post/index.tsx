import { PostContainer, PostHeaderSection, PostMainSection } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faArrowUpRightFromSquare, faCalendarDay, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { NavLink } from 'react-router-dom'

export function Post() {
  return (
    <PostContainer>
      <PostHeaderSection>
        <header>
          <NavLink to='/'>
            <span>
              <FontAwesomeIcon icon={faChevronLeft} />
              VOLTAR
            </span>
          </NavLink>
          <a>
            <span>
              VER NO GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </a>
        </header>
        <h1>JavaScript data types and data structures</h1>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </footer>
      </PostHeaderSection>
      <PostMainSection>
        <article>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </article>
        <div>
          <p>let foo = 42;   // foo is now a number</p>
          <p>foo = ‘bar’;    // foo is now a string</p>
          <p>foo = true;     // foo is now a boolean</p>
        </div>
      </PostMainSection>
    </PostContainer>
  )
}