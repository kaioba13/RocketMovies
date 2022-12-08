import { Container } from "./styles";
import { Button } from "../../components/button";

export function Details() {
  return (
    <Container>
      <h1>Hello Word</h1>
      <span>Teste</span>
      <Button title="Comprar" loading />
    </Container>
  );
}
