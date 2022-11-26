import React, { useContext } from 'react';
import { AuthContext } from '../../UserControl/Contexts/AuthProvider/AuthProvider';

const BuyingModal = ({ mobileInfo }) => {
  const { name, img, location, sellerName, originalPrice, resalePrice, yearUsed, date } = mobileInfo;
  const { user } = useContext(AuthContext);
  const { displayName, email } = user;

  return (
    <div>
      <input type="checkbox" id="buyingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-cyan-300 text-black">
          <label htmlFor="buyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="py-4">Price: {originalPrice}</p>
          <p className="py-4">Heyy, {user.displayName} you want to buy {name}?</p>
          <p className="py-4">Email  {user.email}</p>
          <input type="text" placeholder="Name" value={displayName} className=" text-black bg-white input input-bordered input-primary w-full" />
          <input type="text" placeholder="Email" value={email} className=" text-black bg-white input input-bordered input-primary w-full" />


        </div>
      </div>
    </div>
  );
};

export default BuyingModal;