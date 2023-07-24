import Header from "@/components/Header/Header";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";
import Layout from "@/components/Layout/Layout";

// TODO: Highlight color when highlighting text

export default function Home() {
  return (
    <>
      <Background />

      <Layout>
        <Header />
        <About />
      </Layout>
      <Footer />
    </>
  );
}
