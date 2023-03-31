import React from 'react';
import { STYLES } from '../../constant';
import img from '../../p1.jpg';
import img2 from '../../p2.webp';
import img3 from '../../p3.jpg';

function CategoryItem(props) {
  return (
    <div>
      <div
        className={`${STYLES.background.bg_primary} shadow hover:shadow-xl rounded w-full aspect-square`}
      >
        <img
          src={img2}
          alt=""
          className="h-4/6 aspect-square flex mx-auto pt-4"
        />
        <p className="text-lg font-medium mt-2 px-4 leading-5 line-clamp-2">
          Nikeee
        </p>
      </div>
    </div>
  );
}

export default CategoryItem;
