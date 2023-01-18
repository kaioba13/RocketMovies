import { Container } from "./styles";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ButtonAdd } from "../../components/ButtonAdd";
import { AiOutlinePlus } from "react-icons/ai";
import { MovieCard } from "../../components/MovieCard";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Profile } from "../../components/Header/styles";
import bgUser from "../../../assets/bg_user.svg";

export function Home() {
  const [movies, setMovies] = useState([]);

  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : bgUser;

  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchMovieNotes() {
      const response = await api.get(`/notes?title=${search}&tags`);
      setMovies(response.data);
    }

    fetchMovieNotes();
  }, [search]);
  return (
    <Container>
      <header>
        <h1>RocketMovies</h1>
        <Input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Pesquisar pelo título"
        />

        <div className="content">
          <div>
            <strong>{user.name}</strong>
            <button className="logOut" onClick={signOut}>
              Sair
            </button>
          </div>

          <Profile to="/profile">
            <img src={avatarUrl} alt="Foto do usuário" />
          </Profile>
        </div>
      </header>

      <Section>
        <div className="Add-Movies">
          <h2>Meus Filmes</h2>
          <ButtonAdd title="Adicionar filme" to="/createmovie">
            <AiOutlinePlus />
          </ButtonAdd>
        </div>

        <main>
          <section>
            {movies.map((movie) => (
              <MovieCard key={String(movie.id)} data={movie} />
            ))}
          </section>
        </main>
      </Section>
    </Container>
  );
}
