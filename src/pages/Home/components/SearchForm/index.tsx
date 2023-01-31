import { FormContainer } from "./styles";

export function SearchForm() {
  return (
    <FormContainer>
      <fieldset>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </fieldset>
      <input type='text' placeholder="Buscar conteúdo" />
    </FormContainer>
  )
}