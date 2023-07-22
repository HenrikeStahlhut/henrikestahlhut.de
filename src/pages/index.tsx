import Header from "@/components/Header/Header";
import { styled } from "styled-components";
import Image from "next/image";
import About from "@/components/About/About";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer/Footer";

const Background = styled.div`
  z-index: -1000;
  position: fixed;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Background>
        <Image
          src={"/img/background.jpg"}
          alt="colorful background"
          layout="fill"
          objectFit="cover"
        />
      </Background>
      <Header />
      <About />
      <Footer />
    </>
  );
}
