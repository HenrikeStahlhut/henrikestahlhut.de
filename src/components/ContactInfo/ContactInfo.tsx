import { Container, StyledText } from "../About/About";
import Subheadline from "../Subheadline/Subheadline";

export default function ContactInfo() {
  return (
    <Container>
      <Subheadline>Contact me</Subheadline>
      <StyledText>
        Feel freee to contact me via e-mail at hey@henrikestahlhut.de or reach
        out to me on
        <a href="https://www.linkedin.com/in/henrike-stahlhut/"> LinkedIn</a>
      </StyledText>
    </Container>
  );
}
