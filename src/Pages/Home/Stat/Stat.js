import React from 'react';

const Stat = () => {
  return (
    <div className='mt-6'>
      <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <h1 className='text-5xl font-extrabold p-2 text-center py-4'>Our Statistics </h1>
        <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">5000+</p>
            <p className="text-sm sm:text-base text-violet-400">Regular User</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-violet-400">89K</p>
            <p className="text-sm sm:text-base">Followers on social media</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl">400+</p>
            <p className="text-sm sm:text-base text-violet-400">Regular Seller</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-violet-400">12+</p>
            <p className="text-sm sm:text-base ">Media Partner</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl ">100K</p>
            <p className="text-sm sm:text-base text-violet-400">Mobile exchange</p>
          </div>
          <div className="flex flex-col justify-start m-2 lg:m-6">
            <p className="text-4xl font-bold leading-none lg:text-6xl text-violet-400">100+</p>
            <p className="text-sm sm:text-base ">Agents</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stat;