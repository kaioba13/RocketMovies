import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src="../../../public/RocketMovies_logo.svg"></img>
      </a>

      <Input placeholder="Pesquisar pelo título" />

      <Profile>
        <div>
          <strong>Kaio Fagundes</strong>
          <a href="/">Sair</a>
          <a href="/">Sair</a>
        </div>
        <img src="https://github.com/kaioba13.png" alt="Foto do usuario"></img>
      </Profile>
    </Container>
  );
}
