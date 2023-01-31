import styled from "styled-components";

export const ProfileContainer = styled.section`
  width: 100%;
  padding: 2rem 2.5rem;
  margin-top: -5.625rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  display: flex;
  justify-content: space-between;
  gap: 2rem;

  aside {
    width: 9.25rem;
  
    img{
      border-radius: 10px;
      width: 100%;
    }
  }


  header {
    display: flex;
    justify-content: space-between;

    h1 {
      line-height: 130%;
      font-size: 1.5rem;
      color: ${(props) => props.theme['base-title']}
    }

    a {
      height: 1.25rem;
      font-size: 0.75rem;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme['blue']};
      align-content: center;
      border-bottom: 2px solid transparent;

      transition: opacity 0.2s, border 0.2s;

      &:hover {
        opacity: 0.75;
        border-bottom: 2px solid ${(props) => props.theme['blue']};
        
      }

      span {
        display: flex;
        gap: 0.5rem;
        align-items: center;
      }
    }
  }
  
`

export const InfoArea = styled.div`
margin-top: 0.5rem;
align-items: center;
width: 38.25rem;

p {
  line-height: 160%;
  margin-top: 0.5rem;
  color: ${(props) => props.theme['base-text']}
}
`

export const Icons = styled.footer`
display: flex;
justify-content: flex-start;
gap: 1.5rem;
flex-wrap: wrap;
margin-top: 1.5rem;

`

export const Icon = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  svg {
    color: ${(props) => props.theme['base-label']};
  }

  span {
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
