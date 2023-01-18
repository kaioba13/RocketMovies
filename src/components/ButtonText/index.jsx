import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "./styles";

export function ButtonText({ title, noIcon, ...rest }) {
  return (
    <Container type="button" {...rest}>
      <a href="/">
        {noIcon ? "" : <AiOutlineArrowLeft />}
        {title}
      </a>
    </Container>
  );
}
