import { Container, Profile } from "./styles";
import { Input } from "../Input";
import Logo from "../../../assets/RocketMovies_logo.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import bgUser from "../../../assets/bg_user.svg";
import { useEffect, useState } from "react";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : bgUser;

  const [search, setSearch] = useState("");
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}&tags`);
      setMovies(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <a href="/">
        <img src={Logo}></img>
      </a>

      <Input
        placeholder="Pesquisar pelo título"
        onChange={(e) => setSearch(e.target.value)}
      />

      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
          <Link to="/" onClick={signOut}>
            Sair
          </Link>
        </div>
        <img src={avatarUrl}></img>
      </Profile>
    </Container>
  );
}
