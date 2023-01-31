import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 912px;
  margin:0 auto;
  padding: 0 1.5rem;

  ul {
    width: 100%;
    margin-top: 3rem;
    justify-content: center;

    display: grid;
    grid-template-columns: repeat(auto-fit, 26rem);
    grid-gap: 2rem 2rem;

    
    li {
      width: 100%;
      background: ${(props) => props.theme['base-post']};
      border-radius: 6px;
      padding: 2rem;
      transition: all 0.5s;

      &:hover {
        opacity: 0.75;
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.4) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
      }

      header {
        width: 100%;
        display: flex;
        justify-content: space-between;

        h3 {
          width: 17.6875rem;
          font-size: 1.25rem;
          line-height: 160%;
          color: ${(props) => props.theme['base-title']};
        }

        span {
          font-size: 0.875rem;
          line-height: 160%;
          color: ${(props) => props.theme['base-span']};
        }
      }

      p {
        margin-top: 1.25rem;
        font-size: 1rem;
        color: ${(props) => props.theme['base-text']}
      }
    }
  }
`