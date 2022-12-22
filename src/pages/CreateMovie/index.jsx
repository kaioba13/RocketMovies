import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NotItem } from "../../components/NotItem";
import { Section } from "../../components/Section";

export function CreateMvoie() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" />
            <h1>Criar Nota</h1>
          </header>

          <div className="Wrapper">
            <Input placeholder="Titulo" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>

          <TextArea placeholder="Observações" />

          <Section title="Marcadores">
            <NotItem value="Comédia" />
            <NotItem value="" isNew />
          </Section>
        </Form>
      </main>
    </Container>
  );
}
