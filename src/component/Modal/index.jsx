import React, { useState } from 'react';
import ProductItem from '../ProductItem';
import Comment from '../Comment';

const Modal = ({ ratingModal, setRatingModal, product }) => {
  const fakeOrder = {
    product: { ...product },
    quantity: 1,
    color: 'Trắng',
    size: '38',
    _id: '645319315613f427f66d296a',
  };

  return (
    <div
      className={`${!ratingModal && 'hidden'} relative z-40`}
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4  border-b-2 border-b-orange-100">
              <h2 className="font-medium text-lg mx-auto text-center">
                ĐÁNH GIÁ SẢN PHẨM
              </h2>
            </div>
            {fakeOrder.product._id && (
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4  border-b-2 border-b-orange-100">
                <ProductItem product={fakeOrder} />
              </div>
            )}
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4  border-b-2 border-b-orange-100">
              <div className="">
                <Comment
                  setRatingModal={(v) => setRatingModal(v)}
                  product_id={product._id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
