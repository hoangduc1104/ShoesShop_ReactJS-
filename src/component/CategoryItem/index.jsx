import React from 'react';
import { STYLES } from '../../constant';
import { NavLink } from 'react-router-dom';

function CategoryItem({ data, className, onClick, props }) {
  return (
    <div className={`rounded overflow-hidden ${className}`} onClick={onClick}>
      <div
        className={`${STYLES.background.bg_primary} shadow hover:shadow-xl rounded w-full aspect-square`}
      >
        <img
          src={data.image}
          alt=""
          className="h-4/6 aspect-square flex mx-auto pt-4"
        />
        <p className="text-lg font-medium mt-2 px-4 leading-5 line-clamp-2">
          {data.name}
        </p>
      </div>
    </div>
  );
}

export default CategoryItem;
