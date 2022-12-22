import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonBack";
import { FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <Container>
      <header>
        <ButtonText title="Voltar" />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/kaioba13.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <div className="Wrapper">
          <Input placeholder="Nome" type="text" />
          <Input placeholder="E-mail" type="text" />
        </div>

        <div className="Wrapper">
          <Input placeholder="Senha atual" type="password" />
          <Input placeholder="Nova senha" type="password" />
        </div>

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
