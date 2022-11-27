import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  // const mail = user.email;
  const [orders, setOrders] = useState([]);
  console.log(orders);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings/${user?.email}`)
      .then(res => res.json())
      .then(data => setOrders(data))
  }, [])

  // const { data: orders = [], refetch, isLoading } = useQuery({
  //   queryKey: ['orders', mail],
  //   queryFn: async () => {
  //     const res = await fetch(`http://localhost:5000/bookings/${mail}`)
  //     const data = await res.json();
  //     return data
  //   }
  // });




  return (
    <div>
      <h1 className='text-4xl font-bold mb-3'>My Orders</h1>
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
            {
              orders.map(order => <tr>
                <th>{order.name}</th>
                <td>{order.phone}</td>
                <td>{order.location}</td>
                <td></td>
                <td>Purple</td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;