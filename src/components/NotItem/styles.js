import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  margin-bottom: 4rem;
  border-radius: 1rem;
  padding-right: 1.6rem;

  button {
    border: none;
    background: none;
  }

  input {
    height: 8.8rem;
    width: 100%;
    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
