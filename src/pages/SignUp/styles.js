import styled from "styled-components";
import BackgroundImg from "../../../assets/image.png";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 700;
    font-size: 4.8rem;
    line-height: 6.3rem;
    margin-bottom: 1.4rem;

    color: ${({ theme }) => theme.COLORS.RED};
  }

  p {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-bottom: 4.8rem;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  h2 {
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    margin-bottom: 4.8rem;
    text-align: left;

    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  input {
    margin-bottom: 0.8rem;
  }

  a:last-child {
    color: ${({ theme }) => theme.COLORS.RED};
    font-size: clamp(1.4rem, 1.4rem + 0.2vw, 1.6rem);
    font-family: "Roboto Slab";
    align-self: center;
    margin-top: 4.2rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.RED};
    margin-right: 0.8rem;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`;
