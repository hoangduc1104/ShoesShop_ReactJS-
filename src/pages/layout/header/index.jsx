import React, { useState } from 'react';
import logo from '../../../logo.png';
import avatar from '../../../ava.png';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BiLogIn } from 'react-icons/bi';
import Button from '../../../component/Button';
import { STYLES } from '../../../constant';
import DropdownComponent from '../../../component/Dropdown';
import MenuItem from '../../../component/MenuItem';
import { FaUserEdit } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';

const Header = () => {
  const [author, setAuthor] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
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
              className={`${STYLES.text.text_primary} text-4xl cart my-auto cursor-pointer hover:${STYLES.text.text_orange} relative`}
            >
              <div
                className={`text-xs text-white absolute -right-2 -top-1 bg-${STYLES.color.primary} rounded-full overflow-hidden`}
              >
                <span className="px-2 py-0">0</span>
              </div>
              <AiOutlineShoppingCart />
            </div>
            {author ? (
              <div className="group my-auto relative">
                <div
                  onClick={() => setOpenMenu(!openMenu)}
                  className={`account flex ml-10 text-xl font-semibold my-auto cursor-pointer hover:text-${STYLES.color.primary}`}
                >
                  <img src={avatar} alt="" className="w-10 h-10 rounded-full" />
                  <span
                    className={` my-auto ml-2`}
                    data-dropdown-toggle="dropdown"
                    id="dropdownDefaultButton"
                  >
                    Hoang Duc
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
                        onClick={() => setAuthor(!author)}
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
                <Button
                  leftIcon={<BiLogIn />}
                  rouded
                  onClick={() => setAuthor(!author)}
                >
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
