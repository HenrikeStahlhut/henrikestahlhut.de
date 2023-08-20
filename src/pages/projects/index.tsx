import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";
import Layout from "@/components/Layout/Layout";
import Subheadline from "@/components/Subheadline/Subheadline";
import { Container, StyledText } from "@/components/About/About";

export default function Projects() {
  return (
    <>
      <Background />
      <Layout>
        <Header />
        <Container>
          <Subheadline>This page is under construction...</Subheadline>
        </Container>
      </Layout>
      <Footer />
    </>
  );
}
