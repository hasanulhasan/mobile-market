import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../../Layout/Navbar/Navbar';
import { AuthContext } from '../../UserControl/Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../Utilities/Hooks/useAdmin';
import useSeller from '../../Utilities/Hooks/useSeller';

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col-reverse lg:flex-row w-full">
        <div className="grid lg:h-screen lg:w-5/6 flex-grow card bg-base-300 rounded-box p-6"><Outlet></Outlet></div>
        <div className="divider divider-horizontal"></div>
        <div className="grid lg:h-screen lg:w-1/6 flex-grow card bg-base-300 rounded-box p-6">
          <ul className='w-full text-center font-semibold'>
            <li className='my-2 bg-gray-600 rounded-lg py-1'><Link to='/dashboard'>My Orders</Link></li>
            {
              isSeller &&
              <>
                <li className='my-2 bg-gray-700 rounded-lg py-1'><Link to='/dashboard/addProducts'>Add Product</Link></li>
                <li className='my-2 bg-gray-700 rounded-lg py-1'><Link to='/dashboard/myProducts'>My Products</Link></li>
              </>
            }
            {
              isAdmin &&
              <>
                <li className='my-2 bg-gray-500 rounded-lg py-1'><Link to='/dashboard/allSeller'>All Seller</Link></li>
                <li className='my-2 bg-gray-500 rounded-lg py-1'><Link to='/dashboard/allBuyers'>All Buyers</Link></li>
              </>
            }
          </ul></div>
      </div>
    </div>
  );
};

export default DashBoard;