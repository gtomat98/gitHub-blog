import styled from 'styled-components'

export const FormContainer = styled.form`
  margin-top: 4.5rem;
  width: 100%;

  fieldset {
    border: 0;
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.125rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    margin-top: 0.75rem;
    width: 100%;
    padding: 0.75rem 1rem;
    background: ${(props) => props.theme['base-input']};

    border: 2px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;

    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};

    transition: border 0.3s;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border: 2px solid ${(props) => props.theme.blue};
    }
  }
`
