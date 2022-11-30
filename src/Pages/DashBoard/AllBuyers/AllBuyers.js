import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';
import DeleteModal from '../../../Utilities/DeleteModal/DeleteModal';

const AllBuyers = () => {
  const [deleteBuyers, setDeleteBuyers] = useState([]);

  const closeModal = () => {
    setDeleteBuyers(null)
  }
  const handleDeleteBuyers = (buyer) => {
    console.log('delete operation')
    fetch(`http://localhost:5000/bookings/${buyer._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.deletedCount > 0) {
          swal("Success", `${buyer.buyerName} deleted`, "success");
          refetch();
        }
      })
  }

  const { data: buyers = [], refetch } = useQuery({
    queryKey: ['bookings'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bookings`);
      const data = await res.json();
      return data;
    }
  })


  return (
    <div>
      <p className='text-4xl font-bold mb-3'>All Buyers {buyers.length}</p>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Purchased Product</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              buyers.map(buyer => <tr key={buyer._id}>
                <th>{buyer.buyerName}</th>
                <td>{buyer.name}</td>
                <td>{buyer.phone}</td>
                <td>{buyer.location}</td>
                <td><label
                  htmlFor="delete-modal"
                  onClick={() => setDeleteBuyers(buyer)}
                  className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deleteBuyers && <DeleteModal
          title={`Are you want to delete ${deleteBuyers.name}?`}
          closeModal={closeModal}
          successAction={handleDeleteBuyers}
          modalData={deleteBuyers}
        ></DeleteModal>
      }
    </div>
  );
};

export default AllBuyers;