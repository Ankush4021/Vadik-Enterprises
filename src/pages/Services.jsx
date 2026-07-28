import CtaBanner from "../components/layout/CtaBanner";
import PageTransition from "../components/layout/PageTransition";
import ServicesGrid from "../components/services/ServicesGrid";
import ServicesHero from "../components/services/ServicesHero";

const Services = () => {
  return (
    <PageTransition>
      <ServicesHero />
      <ServicesGrid />
      <CtaBanner />
    </PageTransition>
  );
};

export default Services;