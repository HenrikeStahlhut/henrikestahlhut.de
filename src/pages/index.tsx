import Header from "@/components/Header/Header";
import Title from "@/components/Title/Title";
import { styled } from "styled-components";
import Image from "next/image";
import Navigation from "@/components/Navigation/Navigation";

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
      <Title />
    </>
  );
}
