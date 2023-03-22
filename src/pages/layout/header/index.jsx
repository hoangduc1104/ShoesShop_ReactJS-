import React, { useState } from 'react';
import { STYLES } from '../../../constant/style';
import logo from '../../../logo.png';
import avatar from '../../../ava.png';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import Button from '../../../component/Button';

const Header = () => {
  const [author, setAuthor] = useState(true);
  return (
    <div className={`${STYLES.background.bg_primary} h-20 shadow-md`}>
      <div className=" my-auto w-full">
        <div className="h-20 flex my-auto absolute top-1/2 -translate-y-1/2 justify-between px-10 w-full">
          <img src={logo} alt="" className="h-20 cursor-pointer" />
          <form className="flex flex-1 mx-20 h-12 my-auto rounded-full overflow-hidden max-w-2xl min-w-max">
            <input
              type="text"
              className="bg-gray-200 flex flex-1 focus:outline-none border-none outline-none px-5 text-lg font-light"
              placeholder="Nhập từ khoá cần tìm..."
            />
            <Button
              leftIcon={<BsSearch />}
              className="h-full"
              type="submit"
            ></Button>
          </form>
          <div className="action flex">
            <div
              className={`${STYLES.text.text_primary} text-4xl cart my-auto cursor-pointer hover:text-${STYLES.color.primary} relative`}
            >
              <div
                className={`text-xs text-white absolute -right-2 -top-1 bg-${STYLES.color.primary} rounded-full overflow-hidden`}
              >
                <span className="px-2 py-0">0</span>
              </div>
              <AiOutlineShoppingCart />
            </div>
            {author ? (
              <div className="account flex ml-10 text-xl font-semibold my-auto cursor-pointer">
                <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
                <span
                  className={`hover:text-${STYLES.color.primary} my-auto ml-2`}
                  data-dropdown-toggle="dropdown"
                  id="dropdownDefaultButton"
                >
                  Hoang Duc
                </span>
              </div>
            ) : (
              <div className="flex ml-10 text-xl font-semibold my-auto cursor-pointer">
                <Button leftIcon={<BiLogIn />} rouded>
                  Đăng Nhập
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
