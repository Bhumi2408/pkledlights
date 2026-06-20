import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import Collections from "./components/Collections";
import ContactCTA from "./components/ContactCTA";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";


export default function Home() {
  return (
   <div>
    <Header/>
    <Hero/>
    <AboutSection id="about"/>
    <FeatureSection/>
    <ServiceSection/>
    <ContactCTA/>
    <Collections/>
    <Blog/>
    <Footer/>
   </div>
  );
}
