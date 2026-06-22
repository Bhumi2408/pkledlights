import AboutSection from "./components/AboutSection";
import Blog from "./components/Blog";
import Collections from "./components/Collections";
import ContactCTA from "./components/ContactCTA";
import FAQ from "./components/FAQ";
import FeatureSection from "./components/FeatureSection";
import Hero from "./components/Hero";
import Products from "./components/Products";
import ServiceSection from "./components/ServiceSection";


export default function Home() {
  return (
   <div>
    <Hero/>
    <AboutSection/>
    <FeatureSection/>
    <ServiceSection/>
    <Collections/>
    <Products/>
    <ContactCTA/>
    <Blog/>
    <FAQ/>
   </div>
  );
}
