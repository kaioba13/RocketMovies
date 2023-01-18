import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useState } from "react";

import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function HandleSingUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={HandleSingUp} />
        <Link to="/">
          <AiOutlineArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
