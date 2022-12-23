import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonAdd } from "../../components/ButtonAdd";
import { AiOutlinePlus } from "react-icons/ai";
import { MovieCard } from "../../components/MovieCard";

export function Home() {
  return (
    <Container>
      <Header />
      <Section>
        <div className="Add-Movies">
          <h2>Meus Filmes</h2>
          <ButtonAdd title="Adicionar filme" to="/createmovie">
            <AiOutlinePlus />
          </ButtonAdd>
        </div>

        <main>
          <MovieCard
            data={{
              title: "Interestelar",
              ratings: 4,
              description:
                'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.',
              tags: [
                { id: "1", name: "Ficção Cientifica" },
                { id: "2", name: "Drama" },
              ],
            }}
          />
          <MovieCard
            data={{
              title: "Pateta",
              ratings: 1,
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto deleniti libero voluptas quasi molestiae at culpa, voluptate repudiandae ratione, commodi vel, magni quia similique minus praesentium est harum. Quaerat, maxime?",
              tags: [
                { id: "1", name: "Comédia" },
                { id: "2", name: "Aventura" },
              ],
            }}
          />
        </main>
      </Section>
    </Container>
  );
}
