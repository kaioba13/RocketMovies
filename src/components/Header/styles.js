import styled from "styled-components";

export const Container = styled.header`
  height: 1.05rem;
  width: 100%;
  padding: 5rem;

  display: flex;

  justify-content: space-between;
  align-items: center;

  border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
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

  > input {
    width: 63rem;
    height: 56rem;
    padding: 1.9rem auto 1.9rem 2.4rem;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.BACKGROUND_700};
    ::placeholder {
      font-family: "Roboto Slab";
      font-style: normal;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.8rem;
      display: flex;
      align-items: center;

      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;
