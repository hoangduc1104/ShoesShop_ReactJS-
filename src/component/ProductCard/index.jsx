import React from 'react';
import { BsCartPlus } from 'react-icons/bs';
import { STYLES } from '../../constant';
import img1 from '../../p1.jpg';
import img2 from '../../p2.webp';
import Button from '../Button';

function ProductCard(props) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#" className="border-b-2 border-orange-100">
          <img
            className="rounded-t-lg border-b-2 border-orange-100"
            src={img1}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5
              className={`h-12 pl-auto line-clamp-2 text-left text-base font-bold tracking-tight text-gray-900 hover:${STYLES.text.text_orange} hover:decoration-1 hover:decoration-underline hover:decoration-orange-600`}
            >
              Noteworthy technology 2021
            </h5>
          </a>
          <div className="flex items-center justify-between">
            <span
              className={`text-xl font-bold text-gray-900 ${STYLES.text.text_orange}`}
            >
              $599
            </span>
            <span
              className={`text-2xl p-3 rounded-full hover:bg-orange-100 hover:cursor-pointer hover:${STYLES.text.text_orange}`}
            >
              <BsCartPlus />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
