import { Stars } from "../Stars";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function MovieCard({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Stars ratings={data.rating} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag title={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}
