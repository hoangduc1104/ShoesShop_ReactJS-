import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../../component/Button';
import useDebounce from '../../../../hooks/useDebounce';
import ProductService from '../../../../service/product';
import { productActions, useProducts } from '../../../../Store';
import { Link, useNavigate } from 'react-router-dom';
import DropdownComponent from '../../../../component/Dropdown';
import { STYLES } from '../../../../constant';

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

  const handlePickResult = (id) => {
    navigate(`detail/${id}`, {
      state: { id: id },
    });
    setOpenMenu(false);
  };

  const handleClear = () => {
    setSearchValue('');
    setSearchResult([]);
    inputRef.current.focus();
  };

  useEffect(() => {}, [openMenu]);

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
    if (inputRef && inputRef.current && inputRef.current.blur)
      inputRef.current.blur();
    setOpenMenu(false);
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
              onFocus={() => setOpenMenu(true)}
              // onBlur={() => setOpenMenu(false)}
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
            <DropdownComponent className={'w-full'}>
              <ul
                className={`${STYLES.text.text_primary} py-2 text-sm dark:text-gray-200`}
              >
                <li>
                  <div className="text-lg flex left pl-4">
                    <p className="h-8">Kết quả tìm kiếm...</p>
                  </div>
                </li>
                {searchResult.length > 0 ? (
                  searchResult.slice(0, 7).map((result) => (
                    <li
                      key={result._id}
                      onClick={() => handlePickResult(result._id)}
                    >
                      <div
                        className={`${STYLES.text.text_secondary} text-lg flex pl-6 py-2 cursor-pointer hover:bg-orange-100`}
                      >
                        <BsSearch className="flex my-auto mr-2" />
                        <Link className="h-8" to={'/'}>
                          {result.name}
                        </Link>
                      </div>
                    </li>
                  ))
                ) : (
                  <li>
                    <div className={`${STYLES.text.text_secondary} text-lg`}>
                      <p className="h-8">Không tìm thấy kết quả phù hợp..</p>
                    </div>
                  </li>
                )}
              </ul>
            </DropdownComponent>
          </div>
        </div>
      </form>
    </>
  );
}

export default Search;
