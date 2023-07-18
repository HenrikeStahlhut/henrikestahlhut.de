import { styled } from "styled-components";
import Title from "../Title/Title";

const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: auto;
`;

const AboutText = styled.p`
  color: white;
`;

export default function About() {
  return (
    <Container>
      <Title />
      <AboutText>
        I&apos;m a frontend developer and media designer from Germany. Since
        I&apos;m new in the coding world, I&apos;m eager to learn as much as I
        can and expand my skillset. I love creative thinking and challenging
        myself.
      </AboutText>
    </Container>
  );
}
