import { styled } from "styled-components";

const StyledTitle = styled.h1`
  font-size: 5rem;
  color: white;
  font-family: "NewYork";

  br {
    display: none;

    @media (max-width: 600px) {
      display: static;
    }
  }
`;

export default function Title() {
  return (
    <StyledTitle>
      Hi, <br />
      I&apos;m Henrike
    </StyledTitle>
  );
}
