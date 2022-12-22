import { Container, Profile } from "./styles";
import { Input } from "../Input";
import Logo from "../../../assets/RocketMovies_logo.svg";

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={Logo}></img>
      </a>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Kaio Fagundes</strong>
          <a href="/">Sair</a>
        </div>
        <img src="https://github.com/kaioba13.png" alt="Foto do usuario"></img>
      </Profile>
    </Container>
  );
}
