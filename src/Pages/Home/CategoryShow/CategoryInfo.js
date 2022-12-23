import React from 'react';
import { Link } from 'react-router-dom';

const CategoryInfo = ({ category }) => {
  const { name, title } = category;
  return (
    <div>
      <Link to={`/category/${name}`} >
        <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:bg-gray-900 dark:text-gray-100 divide-gray-700">
          <div className="flex flex-1 flex-col p-4 border-l-8 dark:border-violet-400">
            <span className="text-2xl">{title}</span>
            <span className="text-xs dark:text-gray-400">Here you find {title}</span>
          </div>
          <button className="px-4 flex items-center text-sm uppercase tracking-wide bg-violet-500 dark:text-white dark:border-gray-700">Go <br />Category</button>
        </div>
      </Link>
    </div >
  );
};

export default CategoryInfo;