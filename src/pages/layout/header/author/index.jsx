import React, { useState } from 'react';
import DropdownComponent from '../../../../component/Dropdown';
import avatar from '../../../../ava.png';
import MenuItem from '../../../../component/MenuItem';
import { HiOutlineLogout } from 'react-icons/hi';
import { STYLES } from '../../../../constant';
import { FaUserEdit } from 'react-icons/fa';
import Button from '../../../../component/Button';
import { BiLogIn } from 'react-icons/bi';

function Author(props) {
  const [author, setAuthor] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
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
          <Button leftIcon={<BiLogIn />} rouded to="/login">
            Đăng Nhập
          </Button>
        </div>
      )}
    </>
  );
}

export default Author;
