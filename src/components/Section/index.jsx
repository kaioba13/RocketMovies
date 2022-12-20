import { Container } from "./styles";

export function Section({ title, children }) {
  return (
    <Container>
      {title}
      {children}
    </Container>
  );
}
