import React, { useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCard';
import { STYLES } from '../../constant';
import {
  useLocation,
  useOutletContext,
  useSearchParams,
} from 'react-router-dom';
import CategoryItem from '../../component/CategoryItem';
import { getUser } from '../../helper/auth';
import CategoryService from '../../service/category';
import ProductService from '../../service/product';
import { productActions, useProducts } from '../../Store';
import { getProductResult, setProductResult } from '../../helper/product';

const SearchPage = () => {
  const [state, dispatch] = useProducts();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const [showBar] = useOutletContext();
  const [me, setMe] = useState();
  const [categories, setCategories] = useState([]);
  const [key, setKey] = useState();
  const [max, setMax] = useState();
  const [min, setMin] = useState();
  const [page, setPage] = useState();

  const getall = async () => {
    const categoryResponse = await CategoryService.getAll({ page: 1 });
    const data = {
      page: 1,
    };
    // setPage(1);
    // setKey(location.state?.keyword);
    // setMin(location.state?.min);
    // setMax(location.state?.max);
    // const data2 = {
    //   page: 1,
    //   keyword: location.state?.keyword,
    //   min: location.state?.min,
    //   max: location.state?.max,
    // };
    setSearchParams({
      page: 1,
      keyword: location.state?.keyword,
      min: location.state?.min,
      max: location.state?.max,
    });
    const productResponse =
      location.state?.result || (await ProductService.getAll(data));
    dispatch(productActions.getAllProduct(productResponse));
    setCategories(categoryResponse);
    // const res = await ProductService.getAll(data2);
    // console.log(res);
    console.log(location.state?.keyword);
    console.log(location.state?.min);
    console.log(location.state?.max);
    console.log(location.state);
  };

  useEffect(() => {
    getall();
  }, [state.searchReload]);

  useEffect(() => {}, [state.searchResult]);

  useEffect(() => {
    setMe(getUser());
  }, []);

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
          {categories?.map((category, index) => (
            <div className="flex" key={category._id}>
              <CategoryItem data={category} />
            </div>
          ))}
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
          {state.searchResult?.map((product) => (
            <div key={product._id}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
