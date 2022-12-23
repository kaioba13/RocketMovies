import { Container, Form, Submit } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NotItem } from "../../components/NotItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function CreateMovie() {
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

          <h2>Marcadores</h2>

          <section>
            <NotItem value="Comédia" />
            <NotItem placeholder="Novo marcador" value="" isNew />
          </section>

          <Submit>
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </Submit>
        </Form>
      </main>
    </Container>
  );
}
