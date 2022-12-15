import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./styles";

export function ButtonBack({ title }) {
  return (
    <Container type="button">
      <a href="/">
        {title}
        <AiOutlineArrowLeft />
      </a>
    </Container>
  );
}
