import { Icon, Icons, InfoArea, ProfileContainer } from "./styles";
import Avatar from '../../../../assets/avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function Profile() {
  return (
    <ProfileContainer>
      <aside>
        <img src={Avatar} />
      </aside>
      <InfoArea>
        <header>
          <h1>Cameron Williamson</h1>
          <a>
            <span>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} size='1x' /></span>

          </a>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <Icons>
          <Icon>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </Icon>

          <Icon>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </Icon>

          <Icon>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </Icon>





        </Icons>
      </InfoArea>
    </ProfileContainer>
  )
}