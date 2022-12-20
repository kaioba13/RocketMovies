import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
  return (
    <Container data={data} {...rest}>
      <div>
        <h1>{data.title}</h1>
        <Stars ratings={data.ratings} />
      </div>

      <p>{data.description}</p>

      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
