import { Container, NewNote, Content } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonAdd } from "../../components/ButtonAdd";
import { AiOutlinePlus } from "react-icons/ai";
import { MovieCard } from "../../components/MovieCard";
import { Stars } from "../../components/Stars";
import { Tags } from "../../components/Tags";

export function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <div className="Add-Movies">
          <h2>Meus Filmes</h2>
          <ButtonAdd title="Adicionar Filme">
            <AiOutlinePlus />
          </ButtonAdd>
        </div>

        <main>
          <MovieCard title="Interestelar">
            <Stars ratings="4" />
            <p>
              Pragas nas colheitas fizeram a civilização humana regredir para
              uma sociedade agrária em futuro de data desconhecida. Cooper,
              ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a
              filha de dez anos de Cooper, acredita que seu quarto está
              assombrado por um fantasma que tenta se
            </p>
            <Tags title="Ficção cientifica" />
            <Tags title="Comédia" />
          </MovieCard>
        </main>
      </Section>
    </Container>
  );
}
