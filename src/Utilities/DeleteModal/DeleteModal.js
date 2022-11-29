import React from 'react';

const DeleteModal = ({ title, closeModal, successAction, modalData }) => {
  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl">{title}</h3>
          <div className="modal-action">
            <label onClick={() => successAction(modalData)} htmlFor="delete-modal" className="btn btn-primary">Yes</label>
            <button onClick={closeModal} className='btn btn-error'>Dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;