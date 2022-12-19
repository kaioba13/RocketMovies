import { Container } from "./styles";

export function MovieCard({ title, children }) {
  return (
    <Container>
      {title}
      {children}
    </Container>
  );
}
