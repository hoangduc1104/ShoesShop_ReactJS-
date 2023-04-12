import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../../component/Button';
import useDebounce from '../../../../hooks/useDebounce';
import ProductService from '../../../../service/product';
import { productActions, useProducts } from '../../../../Store';
import { useNavigate } from 'react-router-dom';
import { replace } from 'formik';
import DropdownComponent from '../../../../component/Dropdown';
import MenuItem from '../../../../component/MenuItem';
import { HiOutlineLogout } from 'react-icons/hi';
import { STYLES } from '../../../../constant';
import { FaUserEdit } from 'react-icons/fa';

function Search(props) {
  const [openMenu, setOpenMenu] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef();
  const [state, dispatch] = useProducts();
  const navigate = useNavigate();

  const debounce = useDebounce(searchValue, 500);

  const handleChange = (e) => {
    const value = e.target.value;
    if (!value.startsWith(' ')) {
      setSearchValue(value);
    }
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  const hanhdleSearch = async () => {
    const response = await ProductService.getAll({
      page: 1,
      keyword: debounce,
    });
    setSearchResult(response);
    dispatch(productActions.searchResult(response));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search', { state: { result: searchResult } });
    dispatch(productActions.searchResult(searchResult));
  };

  useEffect(() => {
    hanhdleSearch();
  }, [debounce, state.loadding]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-1 mx-20 h-12 my-auto  max-w-2xl min-w-max"
      >
        <div className="">
          <div className="flex w-full rounded-full overflow-hidden">
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              className="bg-gray-200 flex flex-1 focus:outline-none border-none outline-none px-5 text-lg font-light"
              placeholder="Nhập từ khoá cần tìm..."
              onChange={handleChange}
            />
            <Button
              leftIcon={<BsSearch />}
              className="h-full"
              // onClick={() => handleSubmit()}
              onMouseDown={(e) => e.preventDefault()}
            ></Button>
          </div>
          <div
            className={`relative top-2 ${
              openMenu ? 'block' : 'hidden'
            } group-hover:block`}
          >
            <DropdownComponent
              footer
              footerChild={
                <MenuItem icon={<HiOutlineLogout />}> Đăng xuất</MenuItem>
              }
              className={'w-full'}
            >
              <ul
                className={`${STYLES.text.text_secondary} py-2 text-sm dark:text-gray-200`}
              >
                <li>
                  <MenuItem icon={<FaUserEdit />}>Tài khoản</MenuItem>
                </li>
              </ul>
            </DropdownComponent>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
