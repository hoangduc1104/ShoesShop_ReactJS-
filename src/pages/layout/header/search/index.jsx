import React, { useEffect, useRef, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Button from '../../../../component/Button';
import useDebounce from '../../../../hooks/useDebounce';
import ProductService from '../../../../service/product';
import { productActions, useProducts } from '../../../../Store';
import { Link, useNavigate } from 'react-router-dom';
import DropdownComponent from '../../../../component/Dropdown';
import { STYLES } from '../../../../constant';
import { Form, Formik } from 'formik';
import { Spinner } from 'flowbite-react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaHistory } from 'react-icons/fa';
import { getHistory, setHistory } from '../../../../helper/search';

const Search = React.memo((props) => {
  const [openMenu, setOpenMenu] = useState(false);

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [state, dispatch] = useProducts();
  const [loadding, setLoadding] = useState(false);

  const inputRef = useRef();
  const navigate = useNavigate();

  const debounce = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(productActions.setSearchKey(''));
  }, []);

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

  const hanhdleSearch = async () => {
    setLoadding(true);
    const response = await ProductService.getAll({
      page: 1,
      keyword: debounce,
    });
    setSearchResult(response);
    dispatch(productActions.searchResult(response));
    setLoadding(false);
  };

  const handleSubmit = async () => {
    dispatch(productActions.searchReload(true));

    await ProductService.getAll({
      page: 1,
      keyword: searchValue,
    });

    // dispatch(productActions.searchResult(searchResult));
    if (inputRef && inputRef.current && inputRef.current.blur)
      inputRef.current.blur();
    setOpenMenu(false);
    dispatch(productActions.searchReload(false));
    dispatch(productActions.setSearchKey(searchValue));

    const data = getHistory();
    data.unshift(searchValue);
    setHistory(data);

    // localStorage.removeItem('SearchHistory');
    navigate(`/search`, {
      state: { result: searchResult, keyword: searchValue },
    });
  };

  useEffect(() => {
    hanhdleSearch();
  }, [debounce, state.loadding]);

  return (
    <>
      <Formik
        initialValues={{
          keyword: '',
        }}
        onSubmit={handleSubmit}
        blur={() => setOpenMenu(false)}
      >
        {({ errors, touched, values, setFieldValue }) => (
          <Form className="flex flex-col flex-1 mx-20 h-12 my-auto  max-w-2xl min-w-max">
            <div className="">
              <div className="flex w-full rounded-full overflow-hidden z-10 relative bg-gray-200">
                <input
                  ref={inputRef}
                  type="text"
                  id="keyword"
                  name="keyword"
                  value={searchValue}
                  className="bg-gray-200 flex flex-1 focus:outline-none focus:shadow-none focus:ring-0	 border-none outline-none px-5 text-lg font-light"
                  placeholder="Nhập từ khoá cần tìm..."
                  onChange={handleChange}
                  onFocus={() => setOpenMenu(true)}
                  // onBlur={() => setOpenMenu(false)}
                />
                {loadding && (
                  <div className="my-auto flex">
                    <Spinner
                      className=" text-center items-center mr-3"
                      aria-label="Default status example"
                    />
                  </div>
                )}

                {!loadding && searchValue && (
                  <div
                    className="my-auto flex cursor-pointer"
                    onClick={() => setSearchValue('')}
                  >
                    <AiOutlineClose
                      className={`${STYLES.text.text_secondary} text-center items-center mr-3 `}
                    />
                  </div>
                )}
                <Button
                  leftIcon={<BsSearch />}
                  className="h-full"
                  type="submit"
                ></Button>
              </div>
              <div
                className={`relative top-2 ${
                  openMenu ? 'block' : 'hidden'
                } group-hover:block`}
              >
                <div
                  className="fixed top-0 h-[100vh] bg-transparent z-0 left-0 right-0"
                  onClick={() => setOpenMenu(false)}
                ></div>

                <DropdownComponent className={'w-full'}>
                  <ul
                    className={`${STYLES.text.text_primary}  border-b-2 border-b-solid border-orange-100 text-sm`}
                  >
                    {getHistory().length > 0 &&
                      getHistory()
                        .slice(0, 5)
                        .map((history, index) => (
                          <li
                            key={history + index}
                            onClick={() => setSearchValue(history)}
                          >
                            <div
                              className={`${STYLES.text.text_secondary} text-lg flex pl-6 py-1 cursor-pointer hover:bg-orange-100`}
                            >
                              <FaHistory className="flex my-auto mr-2" />
                              <Link className="h-8   line-clamp-1" to={'/'}>
                                {history}
                              </Link>
                            </div>
                          </li>
                        ))}
                  </ul>

                  <div className="text-lg flex left pl-4 pt-2">
                    <p className="h-8">Kết quả tìm kiếm...</p>
                  </div>

                  <ul
                    className={`${STYLES.text.text_primary} py-2 text-sm dark:text-gray-200`}
                  >
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
                            <p className="h-8   line-clamp-1">{result.name}</p>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>
                        <div
                          className={`${STYLES.text.text_secondary} text-lg`}
                        >
                          <p className="h-8">
                            Không tìm thấy kết quả phù hợp..
                          </p>
                        </div>
                      </li>
                    )}
                  </ul>
                </DropdownComponent>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
});

export default Search;
