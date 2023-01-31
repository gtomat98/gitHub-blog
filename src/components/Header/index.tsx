import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent } from "./styles";
import Logo from '../../assets/Logo.svg'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to='/'>
          <img src={Logo}/>
        </NavLink>
      </HeaderContent>
    </HeaderContainer>
  )
}