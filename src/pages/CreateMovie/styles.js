import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  margin: 3.8rem auto;
  max-width: 113.7rem;
  padding: 0 3rem 6rem 3rem;

  .Wrapper {
    display: flex;

    gap: 4rem;
  }

  h1 {
    margin-top: 2.4rem;
    margin-bottom: 4rem;
  }

  section {
    display: flex;
    gap: 2.4rem;
    flex-wrap: wrap;
    background: #000;
    border-radius: 0.8rem;
    padding: 1.6rem;
  }

  h2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
    margin-bottom: 2.4rem;
  }
`;

export const Submit = styled.div`
  display: flex;
  gap: 2.4rem;

  margin-top: 4rem;

  button:first-child {
    background-color: #000;
    color: ${({ theme }) => theme.COLORS.RED};
  }
`;
