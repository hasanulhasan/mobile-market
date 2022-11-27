import React, { useContext } from 'react';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1 className='text-4xl font-bold mb-3'>My Products</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>No</th>
              <th>Product Name</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
              <td>Blue</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;