import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./styles";

export function ButtonText({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href="/">{title}</a>
    </Container>
  );
}
