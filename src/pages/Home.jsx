import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solution from "../components/Solution";
import About from "../components/About";
import Stats from "../components/Stats";
import Process from "../components/Process";
import Features from "../components/Features";
import Payment from "../components/Payment";
import ReferralSection from "../components/ReferralSection";
import CTA from "../components/CTA";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Solution />

      {/* <Features /> */}
      <Payment />
      <ReferralSection />
      <Footer />
    </>
  );
};

export default Home;
