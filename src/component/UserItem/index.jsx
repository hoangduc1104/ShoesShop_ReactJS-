import React from 'react';
import { STYLES } from '../../constant';
import ava from '../../ava.png';
import { Rating, Typography } from '@mui/material';

const UserItem = ({ className, data }) => {
  return (
    <>
      <div
        // onClick={() => setOpenMenu(!openMenu)}
        className={`account flex ml-5 text-sm my-auto cursor-pointer hover:text-${STYLES.color.primary} ${className}`}
      >
        <img
          src={`${process.env.REACT_APP_BASE_URL}${'/user/profile-image/'}${
            data?.owner?.image
          }`}
          alt=""
          className="w-8 h-8 rounded-full my-auto"
        />
        <div className="ml-2 relative">
          <span data-dropdown-toggle="dropdown" id="dropdownDefaultButton">
            {data?.owner?.username}
          </span>
          <div className="text-lg">
            <Rating name="read-only" value={data.rate} readOnly size="small" />
          </div>
          <div
            className={`absolute flex w-max text-xs ${STYLES.text.text_secondary} -bottom-4`}
          >
            <p>{data?.updatedAt} </p>
            <p className="ml-2"> | Pân loại:Trắng,39</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserItem;
