import React, { useContext } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../UserControl/Contexts/AuthProvider/AuthProvider';

const BuyingModal = ({ mobileInfo, setMobileInfo }) => {
  const { name, img, location, sellerName, originalPrice, resalePrice, yearUsed, date } = mobileInfo;
  // console.log(name);
  const { user } = useContext(AuthContext);

  const handleBookItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const location = form.location.value;

    const booking = {
      buyerName, resalePrice, img, name, email, phone, location
    }

    // console.log(booking);
    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        if (data.acknowledged) {
          setMobileInfo(null);
          swal("Item Booked!", "Thanks for buying!", "success");
          form.reset();
        }
        else {
          swal("Oops!", `${data.message}`, "error");
        }
      })

  }

  return (
    <div>
      <input type="checkbox" id="buyingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-cyan-200 text-black">
          <label htmlFor="buyingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div className='font-bold mb-4'>
            <h3 className="text-lg font-bold">Product name: {name}</h3>
            <div className='flex justify-center'>
              <img src={img} alt='item-img' className='h-44 w-40 rounded-lg'></img>
            </div>
            <p className='text-center'>Price: {resalePrice} taka</p>
            <p>Note: If you want to book this item please fiil up this form</p>
          </div>

          <form onSubmit={handleBookItem} className='grid grid-cols-1 gap-3 font-semibold mt-2'>
            <input name="name" type="text" placeholder="Your name" value={user?.displayName} className=" text-black bg-white input input-bordered input-secondary w-full" required />
            <input name="email" type="email" value={user?.email} placeholder="Email" className=" text-black bg-white input input-bordered input-secondary w-full" required />
            <input name="phone" type="text" placeholder="Enter your Phone number" className=" text-black bg-white input input-bordered input-secondary w-full" required />
            <input name="location" type="text" placeholder="Enter your location" className=" text-black bg-white input input-bordered input-secondary w-full" required />
            <div>
              <button type='submit' className="btn btn-primary w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BuyingModal;