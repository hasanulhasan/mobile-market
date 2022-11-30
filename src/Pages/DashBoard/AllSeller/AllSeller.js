import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';
import DeleteModal from '../../../Utilities/DeleteModal/DeleteModal';

const AllSeller = () => {
  const [deleteSeller, setDeleteSeller] = useState([]);

  const closeModal = () => {
    setDeleteSeller(null)
  }
  const handleDeleteSeller = (seller) => {
    console.log('delete operation')
    fetch(`http://localhost:5000/users/${seller._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.deletedCount > 0) {
          swal("Success", `${seller.name} deleted`, "success");
          refetch();
        }
      })
  }

  const { data: sellers = [], refetch } = useQuery({
    queryKey: ['seller'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users/seller`);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <p className='text-4xl font-bold mb-3'>All seller {sellers.length}</p>
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
              sellers.map(seller => <tr key={seller._id}>
                <th>{seller.name}</th>
                <td>{seller.email}</td>
                <td>{seller.role}</td>
                <td><label
                  htmlFor="delete-modal"
                  onClick={() => setDeleteSeller(seller)}
                  className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label></td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deleteSeller && <DeleteModal
          title={`Are you want to delete ${deleteSeller.name}?`}
          closeModal={closeModal}
          successAction={handleDeleteSeller}
          modalData={deleteSeller}
        ></DeleteModal>
      }
    </div>
  );
};

export default AllSeller;