import styled from "styled-components";

export const Container = styled.div`
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 1rem;
  padding-right: 1.6rem;

  button {
    border: none;
    background: none;
  }

  input {
    height: 5.6rem;
    width: 100%;
    align-items: center;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  svg {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`;
