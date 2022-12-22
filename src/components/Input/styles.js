import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: min(62rem, 100%);

  > input {
    width: min(100%, 63rem);

    padding: 1.9rem 2.4rem;
    border-radius: 1rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 0 1.6rem;
  }
`;
