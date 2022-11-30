import React from 'react';

const AdvertiseCard = ({ mobile, setMobileInfo }) => {

  const { name, img, location, sellerName, originalPrice, resalePrice, yearUsed, date } = mobile;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl outline p-4 outline-lime-100">
      <figure>
        <img src={img} alt=".." className='h-72 w-80 rounded-lg' />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl text-center">{name}</h2>
        <div className='flex justify-between font-semibold'>
          <div>
            <p>Location: {location}</p>
            <p>Used {yearUsed} years</p>
          </div>
          <div className='text-end'>
            <p>Current price: {resalePrice}</p>
            <p>Original: {originalPrice}</p>
          </div>
        </div>
        <p className='text-center'>Posted on <strong>{date}</strong> by <strong>{sellerName}</strong></p>
        <div className=" w-full">
          <label
            onClick={() => setMobileInfo(mobile)}
            htmlFor="buyingModal"
            className="btn btn-warning  btn-outline w-full" >Book Now</label>
        </div>
      </div>

    </div>
  );
};

export default AdvertiseCard;