import iconbrand from '../assets/images/icon-brand-recognition.svg';
import icondetail from '../assets/images/icon-detailed-records.svg';
import iconcustom from '../assets/images/icon-fully-customizable.svg';

const Statistics = () => {
  return (
    <>
      <section id="stats" className="py-24 bg-gray-100">
        <div className="container mx-auto px-3">
          <h2 className="text-4xl mb-6 font-bold text-center">
            Advanced Statistics
          </h2>
          <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">
            Track how your links are performing across the web with our advanced
            statistics dashboard
          </p>
        </div>
      </section>
      {/* feature box section */}
      <section id="features" className="pb-32 bg-gray-100">
        <div className="container relative flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7">
          {/* horizontal line */}
          <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
          {/* vertical line */}
          <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>
          {/* box 1 */}
          <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background and center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={iconbrand} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Detailed Records
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Gain insights into whois clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          {/* box 2 */}
          <div className="relative flex mt-24 flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background and center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={icondetail} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Brand Recognition
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help to show confidencein your content
            </p>
          </div>
          {/* box 3 */}
          <div className="relative flex mt-24 flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-16">
            {/* image positioning */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
              {/* image container for background and center */}
              <div className="flex items-center justify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                <img src={iconcustom} alt="" />
              </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
              Fully Customizable
            </h5>
            <p className="text-center text-gray-400 md:text-left">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Statistics;
