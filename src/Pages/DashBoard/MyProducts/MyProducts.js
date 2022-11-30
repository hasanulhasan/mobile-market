import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../../UserControl/Contexts/AuthProvider/AuthProvider';
import DeleteModal from '../../../Utilities/DeleteModal/DeleteModal';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deleteProducts, setDeleteProducts] = useState([]);

  const closeModal = () => {
    setDeleteProducts(null)
  }
  //deleting phone
  const handleDeleteProducts = (product) => {
    fetch(`http://localhost:5000/allphones/${product._id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          swal("Success", `${product.name} deleted`, "success");
          refetch();
        }
      })
  }
  //sending advertise item on database
  const advertisePhone = (phone) => {

    fetch('http://localhost:5000/advertise', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(phone)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          swal("Succeed!", "You have posted as it advertise!", "success");
        }
      })
      .catch(err => {
        console.error(err)
        swal("Oops!", "This product already added!", "error");
      })
  }

  const url = `http://localhost:5000/allphones/${user?.email}`;

  const { data: allphones = [], refetch } = useQuery({
    queryKey: ['allphones', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    }
  })

  return (
    <div>
      <h1 className='text-4xl font-bold mb-3'>My Products no {allphones.length}</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Status</th>
              <th>Advertise</th>
            </tr>
          </thead>
          <tbody>
            {
              allphones.map(phone => <tr key={phone._id}>
                <th><div className="avatar">
                  <div className="w-20 rounded">
                    <img src={phone.img} alt='avatar' />
                  </div>
                </div></th>
                <th>{phone.name}</th>
                <th>{phone.resalePrice}</th>
                <th><label
                  htmlFor="delete-modal"
                  onClick={() => setDeleteProducts(phone)}
                  className="btn btn-square btn-outline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </label></th>
                <th>UnSold</th>
                <th>
                  <button
                    onClick={() => advertisePhone(phone)}
                    className="btn btn-sm btn-warning"
                  >Advertise</button>
                </th>
              </tr>)
            }
          </tbody>
        </table>
      </div>
      {
        deleteProducts && <DeleteModal
          title={`Are you want to delete ${deleteProducts.name}?`}
          closeModal={closeModal}
          successAction={handleDeleteProducts}
          modalData={deleteProducts}
        ></DeleteModal>
      }
    </div >
  );
};

export default MyProducts;