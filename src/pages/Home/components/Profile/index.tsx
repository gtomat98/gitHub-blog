import { Icon, Icons, InfoArea, ProfileContainer } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useContext } from 'react'
import { PostsContext } from '../../../../contexts/PostsContext'

export function Profile() {
  const { user } = useContext(PostsContext)
  return (
    <ProfileContainer>
      <aside>
        <img src={user?.avatar} alt="" />
      </aside>
      <InfoArea>
        <header>
          <h1>{user?.userName}</h1>
          <a href={user?.githubProfile} target="_blank" rel="noreferrer">
            <span>
              GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </span>
          </a>
        </header>
        <p>{user?.biography}</p>
        <Icons>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.userName}</span>
          </Icon>

          {user?.employeeWhere != null && (
            <Icon>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{user?.employeeWhere}</span>
            </Icon>
          )}

          <Icon>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} seguidores</span>
          </Icon>
        </Icons>
      </InfoArea>
    </ProfileContainer>
  )
}
