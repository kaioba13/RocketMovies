import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .Add-Movies {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
  }

  .content {
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .content > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  > strong {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .logOut {
    border: none;
    background: transparent;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > header {
    width: 100%;
    margin: 0 auto;
    padding: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    @media (max-width: 900px) {
      flex-direction: column-reverse;
      gap: 2rem;
      align-items: center;
    }

    > h1 {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 700;
      font-size: 2.4rem;
      line-height: 3.2rem;

      color: ${({ theme }) => theme.COLORS.RED};
    }
  }

  main {
    padding: 4rem;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.COLORS.RED} transparent;
  }

  > main::-webkit-scrollbar {
    width: 0.8rem;
    border-radius: 10rem;
  }

  > main::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.RED};
  }
`;
