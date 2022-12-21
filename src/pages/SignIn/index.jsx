import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
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
        <ButtonText title="Criar conta" />
      </Form>
      <Background />
    </Container>
  );
}
