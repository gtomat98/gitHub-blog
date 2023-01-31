import styled from "styled-components";
import BackgroundLeft from './assets/lines01.svg'
import BackgroundRight from './assets/lines02.svg'
import LightCenter from './assets/lightCenter.svg'
import LightLeft from './assets/lightLeft.svg'
import LightRight from './assets/lightRight.svg'

export const HeaderContainer = styled.header`
  
  height: 18.5rem;
  background: ${props => props.theme['base-profile']};
  background-image: url(${BackgroundLeft}), url(${BackgroundRight}), url(${LightCenter}), url(${LightLeft}), url(${LightRight});
  background-repeat: no-repeat, no-repeat, no-repeat;
  background-position: left center, right center, bottom center, left top, right top;
`

export const HeaderContent = styled.div`
width: 100%;
max-width: 1440px;
margin: 0 auto;

padding-top: 4rem;
display: flex;
justify-content: center;
`