import React from 'react';

const Hero = () => {
  return (
    <div className="hero bg-base-200 my-5">
      <div className="hero-content flex-col lg:flex-row">
        <img src="https://assets-news-bcdn.dailyhunt.in/cmd/resize/696x419_90/fetchdata16/images/4a/c7/7a/4ac77a29525cee532a5d5fa7f4477b2170e4bdcd502f344f37c2e6b0d8ab2fe9.webp" className="rounded-lg shadow-2xl" />
        <div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">Sell and
              <span className="dark:text-violet-400"> Buy</span> your mobile phone Easily
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">Heyy, you are in The biggest buying and
              <br className="hidden md:inline lg:hidden" />selling market of mobile in your arena
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Sell</a>
              <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Buy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;