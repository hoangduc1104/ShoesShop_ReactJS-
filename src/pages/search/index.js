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
import { Pagination } from 'flowbite-react';
import not_found_img from '../../not-found.jpg';

const SearchPage = () => {
  const [state, dispatch] = useProducts();
  const location = useLocation();
  let [searchParams, setSearchParams] = useSearchParams();

  const [showBar] = useOutletContext();
  const [me, setMe] = useState();
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loadding, setLoadding] = useState(false);
  const [isLoadding, setIsLoadding] = useState(false);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const getall = async () => {
    setLoadding(true);
    const categoryResponse = await CategoryService.getAll({ page: 1 });
    const data = {
      page: currentPage,
      keyword: state.searchKey,
      min: state.searchMin,
      max: state.searchMax,
    };

    setSearchParams({
      keyword: state.searchKey,
      min: state.searchMin,
      max: state.searchMax,
    });
    const productResponse = await ProductService.getAll(data);
    dispatch(productActions.searchResult(productResponse));
    setCategories(categoryResponse);
    setLoadding(false);
    setIsLoadding(true);
  };

  useEffect(() => {
    getall();
  }, [state.searchReload, currentPage]);

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
        {loadding && <p>LOADDING...</p>}
        {isLoadding && state.searchResult?.length === 0 ? (
          <div>
            <p>Không có kết quả phù hợp!!!</p>
            <img src={not_found_img} className="w-full h-[70vh]" />
          </div>
        ) : (
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
        )}
      </div>
      <div className="flex items-center justify-center text-center my-10">
        <Pagination
          className=""
          currentPage={currentPage}
          layout="pagination"
          onPageChange={onPageChange}
          showIcons={true}
          totalPages={3}
        />
      </div>
    </>
  );
};

export default SearchPage;
