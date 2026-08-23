import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import About from "./components/About";
import Expertise from "./components/Expertise";
import CloudTraining from "./components/CloudTraining";
import ProgrammingDSA from "./components/ProgrammingDSA";
import DataAnalytics from "./components/DataAnalytics";
import FullStack from "./components/FullStack";
import PlacementTraining from "./components/PlacementTraining";
import Institutions from "./components/Institutions";
import FDP from "./components/FDP";
import CorporateTraining from "./components/CorporateTraining";
import Programs from "./components/Programs";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import WhyPartner from "./components/WhyPartner";
import Delivery from "./components/Delivery";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Impact />
        <About />
        <Expertise />
        <CloudTraining />
        <ProgrammingDSA />
        <DataAnalytics />
        <FullStack />
        <PlacementTraining />
        <Institutions />
        <FDP />
        <CorporateTraining />
        <Programs />
        <Methodology />
        <Testimonials />
        <WhyPartner />
        <Delivery />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
