import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
