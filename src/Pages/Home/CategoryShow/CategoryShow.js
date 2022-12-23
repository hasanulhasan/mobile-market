import React from 'react';
import { Link } from 'react-router-dom';
import CategoryInfo from './CategoryInfo';

const categories = [
  {
    id: 1,
    name: 'smartphone',
    title: 'Smartphone'
  },
  {
    id: 2,
    name: 'featurephone',
    title: 'Feature Phone'
  },
  {
    id: 3,
    name: 'luxuryphone',
    title: 'Luxury Phone'
  }
]

const CategoryShow = () => {
  return (
    <div>
      <div className='text-center my-12'>
        <h1 className="text-5xl font-semibold py-3 ">Phone <span className='text-violet-500'>Category</span></h1>
        <p className='pb-8'>You can choice your favorite second hand phone category </p>
      </div>
      <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          categories.map(category => <CategoryInfo
            key={category.id}
            category={category}>
          </CategoryInfo>)
        }
      </div>
    </div>
  );
};

export default CategoryShow;