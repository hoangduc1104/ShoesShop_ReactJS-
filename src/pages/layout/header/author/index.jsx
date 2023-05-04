import React, { useState, useEffect } from 'react';
import DropdownComponent from '../../../../component/Dropdown';
import MenuItem from '../../../../component/MenuItem';
import { HiOutlineLogout } from 'react-icons/hi';
import { STYLES } from '../../../../constant';
import { FaUserEdit } from 'react-icons/fa';
import Button from '../../../../component/Button';
import { BiLogIn } from 'react-icons/bi';
import { actions, cartActions, useAuth, useCart } from '../../../../Store';
import cookies from 'js-cookie';
import { getUser, setUser } from '../../../../helper/auth';
import { setProductInCart } from '../../../../helper/cart';
import { useNavigate } from 'react-router-dom';

function Author(props) {
  const [openMenu, setOpenMenu] = useState(false);
  const [state, dispatch] = useAuth();
  const [cartState, cartDispatch] = useCart();
  const { me, isLoading } = state;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(actions.loadingTodo(true));
    setUser(null);
    dispatch(actions.getMeTodo(getUser()));
    cookies.remove('token');
    dispatch(actions.loadingTodo(false));
    // console.log('set 2');
    cartDispatch(cartActions.setCart(null));
    setProductInCart(null);
    navigate('/');
  };

  useEffect(() => {}, [me]);
  return (
    <>
      {me ? (
        <div className="group my-auto relative">
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className={`account flex ml-10 text-xl font-semibold my-auto cursor-pointer hover:text-${STYLES.color.primary}`}
          >
            <img
              src={`${process.env.REACT_APP_BASE_URL}${'/user/profile-image/'}${
                getUser().image
              }`}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span
              className={` my-auto ml-2`}
              data-dropdown-toggle="dropdown"
              id="dropdownDefaultButton"
            >
              {me.username}
            </span>
          </div>
          <div
            className={`absolute top-12 -right-4  ${
              openMenu ? 'block' : 'hidden'
            } group-hover:block`}
          >
            <DropdownComponent
              footer
              footerChild={
                <MenuItem
                  icon={<HiOutlineLogout />}
                  onClick={() => handleLogout()}
                >
                  {' '}
                  Đăng xuất
                </MenuItem>
              }
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
      ) : (
        <div className="flex ml-10 text-xl font-semibold my-auto cursor-pointer">
          <Button leftIcon={<BiLogIn />} rouded to="/login">
            Đăng Nhập
          </Button>
        </div>
      )}
    </>
  );
}

export default Author;
