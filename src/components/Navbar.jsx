import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useState } from "react";
import { BsSearch, BsBagCheck } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";
import { User } from "./User";

const links = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          <div className="flex-shrink-0">
            <Link to="/" title="" className="flex">
              <img className="w-auto h-8 lg:h-12" src={logo} alt="" />
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          >
            {!isOpen ? (
              <svg
                className="block w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            ) : (
              <svg
                className=" w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>

          {user && (
            <div className="hidden lg:flex lg:items-center lg:space-x-10">
              {links.map((link) => (
                <Link
                  key={link.url}
                  to={link.url}
                  title=""
                  className="text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
          <div className=" hidden lg:inline-flex space-x-6">
            <button>
              <BsSearch size={20} />
            </button>
            <button>
              <BsBagCheck size={20} />
            </button>
            <Link
              to={user ? "/appointment" : "/login"}
              title=""
              className="items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-orange-600 hover:text-white transition-all duration-200 border border-orange-600 rounded-md  hover:bg-orange-700 focus:bg-orange-700"
              role="button"
            >
              {user ? "Appointment" : "Login"}
            </Link>
            {user && <User />}
          </div>
        </nav>

        {user && isOpen && (
          <nav className="pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md lg:hidden">
            <div className="flow-root">
              <div className="flex flex-col px-6 -my-2 space-y-1">
                {links.map((link) => (
                  <Link
                    key={link.url}
                    to={link.url}
                    title=""
                    className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-orange-600 focus:text-orange-600"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="px-6 mt-6">
              <Link
                to="/appointment"
                title=""
                className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white transition-all duration-200 bg-orange-600 border border-transparent rounded-md text-center hover:bg-orange-700 focus:bg-orange-700"
                role="button"
              >
                Appointment
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
