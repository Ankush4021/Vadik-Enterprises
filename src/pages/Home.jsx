import AboutSection from "../components/home/AboutSection";
import ClientsSection from "../components/home/ClientsSection";
import Hero from "../components/home/Hero";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import PageTransition from "../components/layout/PageTransition";

const Home = () => {
  return (
    <PageTransition>
      
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <ClientsSection />
      
    </PageTransition>
  );
};

export default Home;