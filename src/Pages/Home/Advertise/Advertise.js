import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BuyingModal from '../../Category/BuyingModal';
import AdvertiseCard from './AdvertiseCard';

const Advertise = () => {
  const [mobileInfo, setMobileInfo] = useState(null);

  const url = `https://assignment-12-server-coral-delta.vercel.app/advertise`;

  const { data: phones = [] } = useQuery({
    queryKey: ['advertise'],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div className='my-12'>
      {
        phones.length > 0 &&
        <>
          <div>
            <div className='text-center'>
              <h1 className="text-5xl font-semibold py-3 ">Advertisement</h1>
              <p className='pb-8'>You can choice your favorite second hand phone from this attractive advertisement</p>
            </div>
            <div className='my-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
              {
                phones.map(mobile => <AdvertiseCard
                  key={mobile._id}
                  mobile={mobile}
                  setMobileInfo={setMobileInfo}
                ></AdvertiseCard>)
              }
            </div>
            <div className='flex justify-center my-3'>
              <Link><button className="btn btn-wide btn-secondary btn-outline">See more</button></Link>
            </div>
            {

              mobileInfo &&
              <BuyingModal
                mobileInfo={mobileInfo}
                setMobileInfo={setMobileInfo}
              ></BuyingModal>

            }
          </div>
        </>
      }

    </div>
  );
};

export default Advertise;