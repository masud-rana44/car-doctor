import { AboutUs } from "./components/AboutUs";
import Banner from "./components/Banner";
import { Info } from "./components/Info";
import { ServiceSection } from "./components/ServiceSection";

const Home = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
      <Banner />
      <AboutUs />
      <ServiceSection />
      <Info />
    </div>
  );
};

export default Home;
