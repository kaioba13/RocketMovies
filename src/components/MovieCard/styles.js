import styled from "styled-components";

export const Container = styled.button`
  border: none;
  border-radius: 1rem;
  background: rgba(255, 133, 155, 0.05);
  width: 100%;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  h1 {
    flex: 1;
    text-align: left;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 0.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    text-align: justify;
    margin: 1.5rem 0;
    max-width: 5000ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  svg {
    margin-bottom: 1.5rem;
  }

  footer {
    width: 100%;
    display: flex;
    gap: 0.8rem;
    margin-top: 2.4rem;
  }

  footer > span {
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.4rem;

    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
  }
`;
