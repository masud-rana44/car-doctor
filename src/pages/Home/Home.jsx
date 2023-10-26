import { AboutUs } from "./components/AboutUs";
import Banner from "./components/Banner";
import { Features } from "./components/Features";
import { Info } from "./components/Info";
import { ProductsSection } from "./components/ProductsSection";
import { ServiceSection } from "./components/ServiceSection";
import { TeamsSection } from "./components/Teams";
import { Testimonial } from "./components/Testimonial";

const Home = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
      <Banner />
      <AboutUs />
      <ServiceSection />
      <Info />
      <ProductsSection />
      <TeamsSection />
      <Features />
      <Testimonial />
    </div>
  );
};

export default Home;
