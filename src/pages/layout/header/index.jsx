import React, { useEffect, useState } from 'react';
import logo from '../../../logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { STYLES } from '../../../constant';
import Search from './search';
import Author from './author';
import Cart from '../../cart';
import { Link, useNavigate } from 'react-router-dom';
import { cartActions, useCart } from '../../../Store';
import { getToken, getUser } from '../../../helper/auth';

const Header = () => {
  const [openCart, setOpenCart] = useState(false);
  const [cartState, cartDispatch] = useCart();
  const navigate = useNavigate();

  useEffect(() => {}, [cartState.cart]);

  const handleShowCart = () => {
    if (getUser()) {
      cartDispatch(cartActions.setOpenCart(true));
    } else {
      navigate('/login');
    }
  };

  return (
    <div className={`${STYLES.background.bg_primary} h-20 shadow-md`}>
      <div className=" my-auto w-full">
        <div className="h-20 flex my-auto absolute top-1/2 -translate-y-1/2 justify-between px-10 w-full">
          <Link to={'/'}>
            <img src={logo} alt="" className="h-20 cursor-pointer" />
          </Link>
          <Search />
          <div className="action flex">
            <div
              className={`${STYLES.text.text_primary} text-4xl cart my-auto cursor-pointer hover:${STYLES.text.text_orange} relative`}
            >
              <div
                className={`text-xs text-white absolute -right-2 -top-1 bg-${STYLES.color.primary} rounded-full overflow-hidden`}
              >
                <span className="px-2 py-0">
                  {cartState.cart && getUser()
                    ? cartState?.cart[0]?.products.length
                    : 0}
                </span>
              </div>
              <AiOutlineShoppingCart onClick={() => handleShowCart()} />
              <Cart openCart={openCart} callBack={() => setOpenCart(false)} />
            </div>
            <Author />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
