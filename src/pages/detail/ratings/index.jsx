import React from 'react';
import UserItem from '../../../component/UserItem';

const Rating = ({ image, comment }) => {
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
