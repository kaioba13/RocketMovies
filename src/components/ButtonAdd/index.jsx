import { AiOutlinePlus } from "react-icons/ai";
import { Container } from "./styles";

export function ButtonAdd({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href="/">
        <AiOutlinePlus />
        {title}
      </a>
    </Container>
  );
}
