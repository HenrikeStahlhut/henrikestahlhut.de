import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";
import Layout from "@/components/Layout/Layout";
import Subheadline from "@/components/Subheadline/Subheadline";
import { styled } from "styled-components";

const StyledMarginContainer = styled.div`
  margin: 50px;
`;

export default function Projects() {
  return (
    <>
      <Background />

      <Layout>
        <Header />
        <StyledMarginContainer>
          <Subheadline>This page is under construction...</Subheadline>
        </StyledMarginContainer>
      </Layout>
      <Footer />
    </>
  );
}
