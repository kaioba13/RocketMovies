import { Container, Form, Submit } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { NotItem } from "../../components/NotItem";
import { Button } from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [rating, setRatings] = useState(0);
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    if (!title) {
      return alert("Digite o titulo do filme!");
    }

    if (!rating) {
      return alert("Digite a sua avaliação do filme!");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não adicionou. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    await api.post("/notes", {
      title,
      rating,
      description,
      tags,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  function handleRemoveMovie() {
    navigate(-1);
  }

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
            <Input
              placeholder="Titulo"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="number"
              onChange={(e) => setRatings(e.target.value)}
            />
          </div>

          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <h2>Marcadores</h2>

          <section>
            {tags.map((tag, index) => (
              <NotItem
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}

            <NotItem
              placeholder="Novo marcador"
              isNew
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </section>

          <Submit>
            <Button title="Excluir filme" onClick={handleRemoveMovie} />
            <Button title="Salvar alterações" onClick={handleNewMovie} />
          </Submit>
        </Form>
      </main>
    </Container>
  );
}
