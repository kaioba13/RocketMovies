import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;
  border: none;
  resize: none;
  border-radius: 1rem;
  padding: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  margin: 4rem 0;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
