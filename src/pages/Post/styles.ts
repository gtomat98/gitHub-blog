import styled from "styled-components";

export const PostContainer = styled.main`
  width: 100%;
  max-width: 912px;
  margin:0 auto;
  padding: 0 1.5rem;
`

export const PostHeaderSection = styled.section`
  width: 100%;
  padding: 2rem;
  margin-top: -5.625rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;

  display: block;
  justify-content: space-between;
  gap: 2rem;

  
  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      height: 1.25rem;
      font-size: 0.75rem;
      text-decoration: none;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme['blue']};

      display: flex;
      align-items: center;
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

  h1 {
    margin-top: 1.25rem;
  }

  footer {
    margin-top: 0.5rem;
    display: flex;
    justify-content: flex-start;
    gap: 2rem;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['base-label']};
      }

      span {
        line-height: 160%;
        font-size: 1rem;
        color: ${(props) => props.theme['base-span']};
      }
    }
  }
`

export const PostMainSection = styled.section`
  width: 100%;
  background: ${(props) => props.theme['base-background']};
  padding: 2.5rem 2rem;

  article {
    font-size: 1.25rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }

  div {
    width: 100%;
    padding: 1rem;
    margin-top: 1.5rem;
    background: ${(props) => props.theme['base-post']};
  }
`