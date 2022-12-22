import styled from "styled-components";

export const Container = styled.header`
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
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.6rem;
    height: 5.6rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 1.6rem;
    text-align: left;
  }

  a {
    text-decoration: none;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: right;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }
`;
