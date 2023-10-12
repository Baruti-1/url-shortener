import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <footer className="py-16 bg-veryDarkViolet">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start">
        {/* logo */}
        <img src={logo} alt="logo" />
        {/* menus container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Features</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Link shortening
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Baranded links
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Analytics
              </Link>
            </div>
          </div>
          {/* menu 2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Blog
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Developers
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Support
              </Link>
            </div>
          </div>
          {/* menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-white capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                About
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Our Team
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Careers
              </Link>
              <Link
                to="#"
                className="capitalize text-grayishViolet hover:text-cyan"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </footer>
  );
};

export default Footer;
