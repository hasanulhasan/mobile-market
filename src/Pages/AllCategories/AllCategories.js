import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MobileCart from './MobileCart';

const AllCategories = () => {
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch('https://assignment-12-server-coral-delta.vercel.app/allphones')
      .then(res => res.json())
      .then(data => setMobiles(data))
  }, [])

  return (
    <div>
      <div>
        <div className='text-center'>
          <h1 className="text-5xl font-semibold py-3 ">All Mobile phones in a row</h1>
          <p className='pb-8'>You can choice your favorite second hand smart phone phone here </p>
        </div>
        <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            mobiles.map(mobile => <MobileCart key={mobile._id} mobile={mobile}></MobileCart>)
          }
        </div>
        <div className='flex justify-center my-3'>
          <Link><button className="btn btn-wide btn-secondary">See all</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AllCategories;