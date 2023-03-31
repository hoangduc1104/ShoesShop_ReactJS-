import React, { useEffect } from 'react';
import ProductCard from '../../component/ProductCard';
import { STYLES } from '../../constant';
import { useOutletContext } from 'react-router-dom';
import CategoryItem from '../../component/CategoryItem';

const HomePage = () => {
  const [showBar] = useOutletContext();
  return (
    <>
      <div className="mb-14">
        <div>
          <h3 className="text-xl font-medium flex left mb-3">Phân loại</h3>
        </div>
        <div
          className={`grid grid-cols-4 ${
            showBar ? 'md:grid-cols-4' : 'md:grid-cols-6'
          } lg:grid-cols-6 gap-2`}
        >
          <div className="flex">
            <CategoryItem />
          </div>
          <div className="flex">
            <CategoryItem />
          </div>
          <div className="flex">
            <CategoryItem />
          </div>
          <div className="flex">
            <CategoryItem />
          </div>
          <div className="flex">
            <CategoryItem />
          </div>
          <div className="flex">
            <CategoryItem />
          </div>
        </div>
      </div>
      <div className="">
        <div>
          <h3 className="text-xl font-medium flex left mb-3">Khám phá</h3>
        </div>
        <div
          className={`${
            STYLES.background.bg_secondary
          } h-max grid grid-cols-2 gap-4
            ${
              showBar
                ? 'md:grid-cols-3 lg:grid-cols-4'
                : 'md:grid-cols-4 lg:grid-cols-5'
            }  xl:grid-cols-5`}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
