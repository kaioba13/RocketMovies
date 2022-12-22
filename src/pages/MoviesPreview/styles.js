import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.RED} transparent;
  }

  > main {
    padding: 0 0 6.4rem 0;
    overflow-y: scroll;
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 10rem;
  }

  > main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.RED};
  }

  > p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.1rem;
    display: flex;
    align-items: center;
    text-align: justify;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;

export const Content = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  margin-top: 2.4rem;

  svg {
    align-self: center;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: 2.4rem;
  img {
    width: 3rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
  span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }
  svg {
    color: ${({ theme }) => theme.COLORS.RED};
  }
`;
