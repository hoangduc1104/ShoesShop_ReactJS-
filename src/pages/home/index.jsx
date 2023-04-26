import React, { useEffect, useState } from 'react';
import ProductCard from '../../component/ProductCard';
import { STYLES } from '../../constant';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import CategoryItem from '../../component/CategoryItem';
import { getUser } from '../../helper/auth';
import CategoryService from '../../service/category';
import ProductService from '../../service/product';
import { cartActions, productActions, useCart, useProducts } from '../../Store';
import { getProductInCart } from '../../helper/cart';
import { Pagination } from 'flowbite-react';
// import Pagination from '../../component/Pagination';

const HomePage = () => {
  const [state, dispatch] = useProducts();
  const navigate = useNavigate();

  const [showBar] = useOutletContext();
  const [me, setMe] = useState();
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cateActive, setCateActive] = useState(-1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const getall = async () => {
    const categoryResponse = await CategoryService.getAll({ page: 1 });
    const data = {
      page: currentPage,
    };
    const productResponse = await ProductService.getAll(data);
    dispatch(productActions.getAllProduct(productResponse));
    setCategories(categoryResponse);
  };

  useEffect(() => {
    getall();
  }, [currentPage]);

  useEffect(() => {}, [state.productsData]);

  useEffect(() => {
    setMe(getUser());
  }, []);

  const hanndleFindByCategory = async (idx, cateId) => {
    setCateActive(idx);
    dispatch(productActions.loadding(true));
    const response = await ProductService.getAll({
      category_id: cateId,
    });
    dispatch(productActions.getAllProduct(response));
    dispatch(productActions.loadding(false));
  };

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
              <CategoryItem
                data={category}
                onClick={() => hanndleFindByCategory(index, category._id)}
                className={
                  cateActive === index
                    ? 'border-2 border-solid border-orange-600 active'
                    : ''
                }
              />
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
          {state.productsData?.map((product) => (
            <div key={product._id}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>
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

export default HomePage;
