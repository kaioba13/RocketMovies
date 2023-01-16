import { useState } from "react";
import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

export function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { SignIn } = useAuth();

  function handleSignIn() {
    SignIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="/register">Criar Conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
