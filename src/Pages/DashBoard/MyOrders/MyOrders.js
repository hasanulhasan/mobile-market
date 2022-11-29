import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  // console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  return (
    <div>
      <h1 className='text-4xl font-bold mb-3'>My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map(order => <tr key={order._id}>
                <th><div className="avatar">
                  <div className="w-20 rounded">
                    <img src={order.img} alt='avatar' />
                  </div>
                </div></th>
                <th>{order.name}</th>
                <th>{order.resalePrice}</th>
                <td>{order.phone}</td>
                <td>{order.location}</td>
                <td><button className="btn btn-sm">Pay</button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;