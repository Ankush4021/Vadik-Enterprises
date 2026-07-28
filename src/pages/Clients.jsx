import ClientsGrid from "../components/clients/ClientsGrid";
import ClientsHero from "../components/clients/ClientsHero";
import CtaBanner from "../components/layout/CtaBanner";
import PageTransition from "../components/layout/PageTransition";
import Container from "../components/ui/Container";

const Clients = () => {
  return (
    <PageTransition>
     <ClientsHero />
     <ClientsGrid />
     <CtaBanner title="Want to Be Our Next Success Story?"
        description="Join the growing list of businesses that trust us with their IT needs."
      />
    </PageTransition>
  );
};

export default Clients;