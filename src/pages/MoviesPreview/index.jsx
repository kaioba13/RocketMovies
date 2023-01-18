import { Container, Content, MovieInfo, UserInfo } from "./styles";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";
import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";
import { Stars } from "../../components/Stars";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bgUser from "../../../assets/bg_user.svg";
import { useAuth } from "../../hooks/auth";
import { format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

export function MoviesPreview() {
  const navigate = useNavigate();

  const { user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : bgUser;
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchMovies();
  }, []);

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota ?");
    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <div className="actions">
              <ButtonText title="Voltar">
                <AiOutlineArrowLeft />
              </ButtonText>
              <button onClick={handleRemove} className="deleteNote">
                Excluir nota
              </button>
            </div>

            <MovieInfo>
              <h1>{data.title}</h1>
              <Stars ratings={data.rating} />
            </MovieInfo>

            <UserInfo>
              <div>
                <img src={avatarUrl}></img>
                <span>{user.name}</span>
              </div>

              <div>
                <CiClock2 />
                <span>
                  {format(
                    new Date(data.created_at),
                    "dd'/'MM'/'yy 'às' HH':'mm",
                    {
                      locale: ptBR,
                    }
                  )}
                </span>
              </div>
            </UserInfo>

            <Section>
              {data.tags &&
                data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
            </Section>
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
