import { AboutUs } from "./components/AboutUs";
import Banner from "./components/Banner";

const Home = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
      <Banner />
      <AboutUs />
    </div>
  );
};

export default Home;
