import Navbar from "../components/layout/Navbar";
import { Form } from "../components/form/Form";
import { Section } from "../components/ui/Section";
import { Heading } from "../components/ui/Heading";
import Footer from "../components/layout/Footer";
import { ScrollRestoration } from "react-router-dom";
const ContactMePage = () => {
  return (
    <>
      <Navbar navState="sm" />
      <ScrollRestoration />
      <Section
        paddingY="large"
        extraClasses="flex flex-col items-center gap-8 md:gap-12"
      >
        <Heading
          fontFamily="fontP"
          color="white"
          weight="normal"
          tone="muted"
          uppercase={false}
          className="text-2xl"
        >
          Tell me about your idea
        </Heading>
        <Form />
      </Section>
      <Footer />
    </>
  );
};

export default ContactMePage;
