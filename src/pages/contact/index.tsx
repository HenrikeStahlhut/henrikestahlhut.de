import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Background from "@/components/Background/Background";
import Layout from "@/components/Layout/Layout";
import ContactInfo from "@/components/ContactInfo/ContactInfo";

export default function Contact() {
  return (
    <>
      <Background />

      <Layout>
        <Header />
        <ContactInfo />
      </Layout>
      <Footer />
    </>
  );
}
