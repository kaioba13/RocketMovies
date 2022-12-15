import styled from "styled-components";

export const Container = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.COLORS.RED};
  a {
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: center;
  }
  svg {
    color: ${({ theme }) => theme.COLORS.RED};
    align-self: center;
  }
`;
