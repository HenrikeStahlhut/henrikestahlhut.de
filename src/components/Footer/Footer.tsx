import { styled } from "styled-components";

const StyledFooter = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 1em;

  ul {
    display: flex;
    flex-direction: row;
    color: white;
  }

  li {
    margin: 5px;
  }

  a {
    color: white;
  }

  @media (max-width: 600px) {
    font-size: 11px;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>©2023 Henrike Stahlhut</li>
        <li> ✦ </li>
        <li>
          <a href="https://www.linkedin.com/in/henrike-stahlhut/"> LinkedIn </a>{" "}
        </li>
        <li> ✦ </li>
        <li>
          <a href="https://github.com/HenrikeStahlhut"> GitHub </a>
        </li>
      </ul>
    </StyledFooter>
  );
}
