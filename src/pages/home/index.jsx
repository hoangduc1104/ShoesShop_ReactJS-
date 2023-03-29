import React, { useEffect } from 'react';
import ProductCard from '../../component/ProductCard';
import { STYLES } from '../../constant';
import { useOutletContext } from 'react-router-dom';

const HomePage = () => {
  const [showBar] = useOutletContext();
  return (
    <div
      className={`${STYLES.background.bg_secondary} h-max grid grid-cols-2 gap-4
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
  );
};

export default HomePage;
