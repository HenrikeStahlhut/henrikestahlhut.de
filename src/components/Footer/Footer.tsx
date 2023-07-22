import { styled } from "styled-components";

const StyledFooter = styled.div`
  color: white;
  a {
    color: white;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      ©2023 Henrike Stahlhut ✦
      <a href="https://www.linkedin.com/in/henrike-stahlhut/"> LinkedIn </a> ✦
      <a href="https://github.com/HenrikeStahlhut"> GitHub </a>
    </StyledFooter>
  );
}
