import { styled } from "styled-components";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Container = styled.div`
  margin-top: 50px;
  width: 25%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1000px) {
    a {
      margin: 0px 10px;
    }
  }
`;

// TODO: mailto on mail button

export default function ContactSection() {
  return (
    <Container>
      <a href="https://github.com/HenrikeStahlhut">
        <BsGithub size={30} color="white" />
      </a>
      <a href="https://www.linkedin.com/in/henrike-stahlhut/">
        <BsLinkedin size={30} color="white" />
      </a>
      <a href="mailto:hey@henrikestahlhut.de">
        <FiMail size={30} color="white" />
      </a>
    </Container>
  );
}
