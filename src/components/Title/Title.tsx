import { styled } from "styled-components";

const StyledTitle = styled.h1`
  @font-face {
    font-family: "NewYork";
    src: local("NewYork.woff2") url("/fonts/NewYork.woff2") format("woff2"),
      local("NewYork.woff") url("/fonts/NewYork.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  font-size: 5rem;
  color: white;
  font-family: "NewYork";
`;

export default function Title() {
  return (
    <StyledTitle>
      Hi,
      <br /> I&apos;m Henrike
    </StyledTitle>
  );
}
