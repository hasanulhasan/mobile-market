import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';

const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookings`)
      .then(res => res.json())
      .then(data => setBuyers(data))
  }, [])

  // const url = `http://localhost:5000/users/seller`;
  // const { data: users = [] } = useQuery({
  //   queryKey: ['users'],
  //   queryFn: async () => {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     return data;
  //   }
  // })


  return (
    <div>
      <p className='text-4xl font-bold mb-3'>All Buyers {buyers.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Buyer Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers.map(buyer => <tr key={buyer._id}>
                <th>{buyer.buyerName}</th>
                <td>{buyer.email}</td>
                <td>{buyer.phone}</td>
                <td>{buyer.location}</td>
                <td><button className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;