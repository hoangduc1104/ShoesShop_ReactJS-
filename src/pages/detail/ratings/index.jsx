import React from 'react';
import UserItem from '../../../component/UserItem';
import { useProducts } from '../../../Store';

const Rating = ({ image, comment }) => {
  const [productState, productDispatch] = useProducts();
  return (
    <>
      <UserItem data={comment} />
      <div className="mt-6 ml-14">
        <p>{comment.status}</p>
      </div>
      <div className="h-20 w-20 ml-14 mt-3">
        <img src={image} alt="" className="h-full w-auto" />
      </div>
    </>
  );
};

export default Rating;
