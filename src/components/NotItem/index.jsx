import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function NotItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <div>
        <input type="text" value={value} readOnly={!isNew} {...rest} />

        <button type="button" onClick={onClick}>
          {isNew ? <FiPlus /> : <FiX />}
        </button>
      </div>
    </Container>
  );
}
