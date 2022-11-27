import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/Navbar';

const DashBoard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="grid lg:h-screen lg:w-5/6 flex-grow card bg-base-300 rounded-box p-6"><Outlet></Outlet></div>
        <div className="divider divider-horizontal"></div>
        <div className="grid lg:h-screen lg:w-1/6 flex-grow card bg-base-300 rounded-box p-6">
          <ul className='w-full text-center font-semibold'>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard/addProducts'>Add Product</Link></li>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard'>My Products</Link></li>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard/allSeller'>All Seller</Link></li>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard/myOrders'>My Orders</Link></li>
          </ul></div>
      </div>
    </div>
  );
};

export default DashBoard;