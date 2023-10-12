import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const DesktopNavigation = () => {
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
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Features
              </NavLink>
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Pricing
              </NavLink>
              <NavLink
                to="#"
                className="text-grayishViolet hover:text-veryDarkViolet"
              >
                Resources
              </NavLink>
            </div>
          </div>
          {/* right buttons menu */}
          <div className="hidden items-center font-bold text-grayishViolet space-x-4 lg:flex">
            <div className="hover:text-veryDarkViolet">Login</div>
            <NavLink
              to="#"
              className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70"
            >
              Sign Up
            </NavLink>
          </div>
          {/* hamburger buttons */}
          <button
            id="menu-btn"
            type="button"
            className="block hamburger lg:hidden focus:outline-none"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>
        {/* mobile menu */}
      </nav>
    </div>
  );
};

export default DesktopNavigation;
