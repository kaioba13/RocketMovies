import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  header {
    width: 100%;
    height: 14.4rem;
    background: rgba(255, 133, 155, 0.05);

    display: flex;
    align-items: center;
    padding: 0 12.4rem;
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto 0;

  input {
    margin-bottom: 0.8rem;
  }

  .Wrapper {
    margin-bottom: 1.6rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  margin: -12rem auto 3.2rem;
  width: 18.6rem;
  height: 18.6rem;

  img {
    border-radius: 50%;
    width: 18.6rem;
    height: 18.6rem;
  }

  label {
    width: 4.8rem;
    height: 4.8rem;

    background: ${({ theme }) => theme.COLORS.RED};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;
    cursor: pointer;
  }

  input {
    display: none;
  }

  svg {
    width: 2rem;
    height: 2rem;
    align-self: center;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
