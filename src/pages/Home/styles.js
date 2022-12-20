import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  .Add-Movies {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
    padding: 0 5rem;
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
