import { styled } from "styled-components";
import Title from "../Title/Title";
import ContactIcons from "../ContactIcons/ContactIcons";

export const Container = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
  margin: 50px auto;
`;

export const StyledText = styled.p`
  color: white;
  margin-top: 30px;

  a {
    color: white;
  }
`;

// TODO: rename to intrudction/main element?

export default function About() {
  return (
    <Container>
      <Title />
      <StyledText>
        {/* I&apos;m a frontend developer and media designer from Germany. Since
        I&apos;m new in the coding world, I&apos;m eager to learn as much as I
        can and expand my skillset. I love creative thinking and challenging
        myself. */}
        Pellentesque vitae dui velit. In nec pellentesque libero. Proin volutpat
        ex sit amet purus mollis, vel aliquet justo molestie. Mauris lacinia est
        urna, ut porta sapien imperdiet ut. Maecenas posuere interdum nibh, at
        laoreet orci dignissim in.
      </StyledText>
      <ContactIcons />
    </Container>
  );
}
