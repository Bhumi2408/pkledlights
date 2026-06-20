import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import Collections from "./components/Collections";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";


export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutSection/>
    <FeatureSection/>
    <ServiceSection/>
    <Collections/>
    <ContactCTA/>
    <Blog/>
    <FAQ/>
   </div>
  );
}
