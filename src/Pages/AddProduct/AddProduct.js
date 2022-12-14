import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../UserControl/Contexts/AuthProvider/AuthProvider';

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const dateToday = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
  const email = user?.email;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const phone = form.phone.value;
    const img = form.img.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const resalePrice = form.resalePrice.value;
    const date = form.date.value;
    const yearUsed = form.yearUsed.value;
    const category = form.category.value;

    const productInfo = {
      email, name, sellerName, phone, img, location, originalPrice, resalePrice, date, yearUsed, category
    }

    fetch('https://assignment-12-server-coral-delta.vercel.app/addProducts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(productInfo)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged) {
          form.reset();
          swal("Succeed!", "You have added a Product!", "success");
          navigate('/dashboard/myProducts');
        }
      })
      .catch(err => console.error(err))
  }


  return (
    <div className='flex justify-center'>
      <div className='w-2/3'>
        <form onSubmit={handleSubmit} className="p-5 outline-double outline-4 outline-offset-2 rounded-lg my-4 " >
          <h1 className='text-center text-3xl py-2 font-semibold'>Add Product</h1>
          <div className='lg:flex'>
            <div className='lg:w-full mx-4'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Product Name</span>
                </label>
                <input type="text" placeholder="Product Name" name="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Phone Number</span>
                </label>
                <input type="text" placeholder="Phone Number" name="phone" className="input input-bordered" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Seller Name</span>
                </label>
                <input type="text" placeholder="Seller Name" name="sellerName" className="input input-bordered" value={user?.displayName} />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name="img" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Location</span>
                </label>
                <input type="text" placeholder="Location" name="location" className="input input-bordered" />
              </div>
            </div>

            <div className='lg:w-full mx-4'>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Post Date</span>
                </label>
                <input type="text" placeholder="" value={dateToday} name="date" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Old Price</span>
                </label>
                <input type="text" placeholder="Old Price" name="originalPrice" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">New Price</span>
                </label>
                <input type="text" placeholder="New Price" name="resalePrice" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Used Year/Condition type</span>
                </label>
                <input type="text" placeholder="Used Year/Condition type" name="yearUsed" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Category</span>
                </label>
                <select name='category' className="select select-bordered w-full" required>
                  <option value='smartphone'>Smartphone</option>
                  <option value='featurephone'>Featurephone</option>
                  <option value='luxuryphone'>Luxuryphone</option>
                </select>
              </div>
            </div>

          </div>
          <div className="form-control mt-6">
            <button type='submit' className="btn btn-info btn-outline">Submit</button>
          </div>
        </form>
      </div >
    </div >
  );
};

export default AddProduct;