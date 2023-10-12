import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Navigation = () => {
  const [mobile, setMobile] = useState(false);
  const [humburger, setHumburger] = useState(true);

  const toggleMobileMenu = () => {
    setMobile(!mobile);
    setHumburger(!humburger);
  };

  return (
    <div>
      {/* nav container */}
      <nav className="relative container mx-auto p-6">
        {/* flex container for all items */}
        <div className="flex items-center justify-between">
          {/* flex container for logo/menu */}
          <div className="flex items-center space-x-20">
            {/* logo */}
            <img src={logo} alt="logo" />
            {/* left menu */}
            <div className="hidden space-x-8 font-bold lg:flex">
              <Link
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </Link>
              <Link
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </Link>
              <Link
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </Link>
            </div>
          </div>
          {/* right buttons menu */}
          <div className="hidden items-center font-bold text-grayishViolet space-x-4 lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <Link
              to="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </Link>
          </div>
          {/* hamburger buttons */}
          <button
            id="menu-btn"
            type="button"
            className={`block hamburger lg:hidden focus:outline-none ${
              !humburger && 'open'
            }`}
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* mobile menu */}
        {mobile && (
          <div
            id="menu"
            className="absolute p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-100"
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <Link to="#" className="w-full text-center">
                Features
              </Link>
              <Link to="#" className="w-full text-center">
                Pricing
              </Link>
              <Link to="#" className="w-full text-center">
                Resources
              </Link>
              <Link
                to="#"
                className="w-full pt-6 border-t border-gray-400 text-center"
              >
                Login
              </Link>
              <Link
                to="#"
                className="w-full py-6 rounded-full bg-cyan border-t border-gray-400 text-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
