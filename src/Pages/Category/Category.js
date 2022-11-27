import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BuyingModal from './BuyingModal';
import SingleCategory from './SingleCategory';

const Category = () => {
  const phones = useLoaderData();
  const [mobileInfo, setMobileInfo] = useState(null);
  // console.log(phones);
  return (
    <div>
      <div>
        <div className='text-center'>
          <h1 className="text-5xl font-semibold py-3 ">Your Searching Category is here</h1>
          <p className='pb-8'>You can choice your favorite second hand smart phone phone here </p>
        </div>
        <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {
            phones.map(mobile => <SingleCategory
              key={mobile._id}
              mobile={mobile}
              setMobileInfo={setMobileInfo}
            ></SingleCategory>)
          }
        </div>
        <div className='flex justify-center my-3'>
          <Link><button className="btn btn-wide btn-secondary">See more</button></Link>
        </div>
      </div>
      {

        mobileInfo &&
        <BuyingModal
          mobileInfo={mobileInfo}
          setMobileInfo={setMobileInfo}
        ></BuyingModal>

      }
    </div>
  );
};

export default Category;