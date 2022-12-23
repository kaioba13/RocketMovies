import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonBack";
import { AiOutlineArrowLeft } from "react-icons/ai";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" />
        <Input placeholder="E-mail" type="text" />
        <Input placeholder="password" type="password" />

        <Button title="Cadastrar" />
        <Link to="/">
          <AiOutlineArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
