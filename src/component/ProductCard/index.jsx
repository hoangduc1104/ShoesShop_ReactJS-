import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsCartPlus } from 'react-icons/bs';
import { STYLES } from '../../constant';
import Button from '../Button';

function ProductCard({ data, props }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-xl">
        <Button
          onClick={() =>
            navigate(`/detail/${data._id}`, { state: { id: data._id } })
          }
          className="border-b-2 border-orange-100 relative bg-white"
        >
          <div className="mt-full"></div>
          <img
            className="rounded-t-lg w-full aspect-square right-0 border-b-2 border-orange-100"
            src={data.avatar}
            alt=""
          />
        </Button>
        <div className="p-5">
          <Button
            onClick={() => navigate('detail', { state: { id: data._id } })}
            className=" bg-white"
          >
            <h5
              className={`h-12 pl-auto line-clamp-2 text-left text-base font-bold tracking-tight text-gray-900 hover:${STYLES.text.text_orange} hover:decoration-1 hover:decoration-underline hover:decoration-orange-600`}
            >
              {data.name}
            </h5>
          </Button>
          <div className="flex items-center justify-between">
            <span
              className={`text-xl font-bold text-gray-900 ${STYLES.text.text_orange}`}
            >
              {data.price}
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
