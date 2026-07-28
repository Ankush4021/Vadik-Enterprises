import ContactForm from "../components/contact/ContactForm";
import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import PageTransition from "../components/layout/PageTransition";

const Contact = () => {
  return (
    <PageTransition>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </PageTransition>
  );
};

export default Contact;