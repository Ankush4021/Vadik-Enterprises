import AboutHero from "../components/about/AboutHero";
import MissionVision from "../components/about/MissionVision";
import OurStory from "../components/about/OurStory";
import CtaBanner from "../components/layout/CtaBanner";
import PageTransition from "../components/layout/PageTransition";


const About = () => {
  return (
    <PageTransition>
      <AboutHero />
      <MissionVision />
      <OurStory />
      <CtaBanner />
    </PageTransition>
  );
};

export default About;