import styled from "styled-components";
import Title from "../Title/Title";
import Navigation from "../Navigation/Navigation";

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeaderContainer>
      <Navigation />
    </StyledHeaderContainer>
  );
}
