import styled from "styled-components";

export const Container = styled.button`
  border: none;
  background: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border-radius: 0.8rem;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  padding: 1.3rem 3.2rem;
  a {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    font-feature-settings: "liga";
  }
  svg {
    color: #000000;
  }
`;
