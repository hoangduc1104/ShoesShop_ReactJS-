import React, { useState } from 'react';
import logo from '../../../logo.png';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { STYLES } from '../../../constant';
import Search from './search';
import Author from './author';
import Cart from '../../cart';

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className={`${STYLES.background.bg_primary} h-20 shadow-md`}>
      <div className=" my-auto w-full">
        <div className="h-20 flex my-auto absolute top-1/2 -translate-y-1/2 justify-between px-10 w-full">
          <img src={logo} alt="" className="h-20 cursor-pointer" />
          <Search />
          <div className="action flex">
            <div
              className={`${STYLES.text.text_primary} text-4xl cart my-auto cursor-pointer hover:${STYLES.text.text_orange} relative`}
            >
              <div
                className={`text-xs text-white absolute -right-2 -top-1 bg-${STYLES.color.primary} rounded-full overflow-hidden`}
              >
                <span className="px-2 py-0">0</span>
              </div>
              <AiOutlineShoppingCart onClick={() => setOpenCart(true)} />
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
