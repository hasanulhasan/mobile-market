import React from 'react';
import { Link } from 'react-router-dom';

const CategoryShow = () => {
  return (
    <div>
      <div className='text-center my-12'>
        <h1 className="text-5xl font-semibold py-3 ">Phone <span className='text-violet-500'>Category</span></h1>
        <p className='pb-8'>You can choice your favorite second hand phone category </p>
      </div>
      <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <Link to='/category/smartphone'>
          <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
            <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
              <span className="text-2xl">Smartphone</span>
              <span className="text-xs dark:text-gray-400">Here you find smartphone</span>
            </div>
            <button className="px-4 flex items-center text-sm uppercase tracking-wide bg-violet-500 dark:text-white dark:border-gray-700">Go <br />Category</button>
          </div></Link>
        <Link to='/category/featurephone'>
          <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
            <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
              <span className="text-2xl">Feature Phone</span>
              <span className="text-xs dark:text-gray-400">Here you find featurephone</span>
            </div>
            <button className="px-4 flex items-center text-sm uppercase tracking-wide bg-violet-500 dark:text-white dark:border-gray-700">Go <br />Category</button>
          </div></Link>
        <Link to='/category/luxuryphone'>
          <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
            <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
              <span className="text-2xl">Luxury Phone</span>
              <span className="text-xs dark:text-gray-400">Here you find Luxury phone</span>
            </div>
            <button className="px-4 flex items-center text-sm uppercase tracking-wide bg-violet-500 dark:text-white dark:border-gray-700">Go <br />Category</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CategoryShow;