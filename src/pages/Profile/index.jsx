import { useState } from "react";
import { Container, Form, Avatar } from "./styles";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonBack";
import { FiCamera } from "react-icons/fi";
import bgUser from "../../../assets/bg_user.svg";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : bgUser;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <ButtonText title="Voltar" />
      </header>

      <Form>
        <Avatar>
          <img src={avatar} />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
          </label>
        </Avatar>

        <div className="Wrapper">
          <Input
            placeholder="Nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="E-mail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="Wrapper">
          <Input
            placeholder="Senha atual"
            type="password"
            onChange={(e) => setPasswordOld(e.target.value)}
          />
          <Input
            placeholder="Nova senha"
            type="password"
            onChange={(e) => setPasswordNew(e.target.value)}
          />
        </div>

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
