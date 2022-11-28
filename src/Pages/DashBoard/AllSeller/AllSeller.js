import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';

const AllSeller = () => {
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/seller`)
      .then(res => res.json())
      .then(data => setSellers(data))
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
      <p className='text-4xl font-bold mb-3'>All seller</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              sellers.map(seller => <tr>
                <th>{seller.name}</th>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <button className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSeller;