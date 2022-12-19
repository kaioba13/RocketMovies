import styled from "styled-components";

export const Container = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;

  text-align: center;

  background-color: rgba(40, 33, 36, 1);
  color: ${({ theme }) => theme.COLORS.GRAY_900};
  padding: 0.8rem 1.6rem;
  margin-right: 0.6rem;
  border-radius: 0.8rem;
`;
