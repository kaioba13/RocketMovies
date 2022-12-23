import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonBack";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input placeholder="E-mail" type="text" />

        <Input placeholder="password" type="password" />

        <Button title="Entrar" />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
