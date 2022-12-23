import { Container, Profile } from "./styles";
import { Input } from "../Input";
import Logo from "../../../assets/RocketMovies_logo.svg";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <Container>
      <a href="/">
        <img src={Logo}></img>
      </a>

      <Input placeholder="Pesquisar pelo título" />

      <Profile to="/profile">
        <div>
          <strong>Kaio Fagundes</strong>
          <Link to="/">Sair</Link>
        </div>
        <img src="https://github.com/kaioba13.png" alt="Foto do usuario"></img>
      </Profile>
    </Container>
  );
}
