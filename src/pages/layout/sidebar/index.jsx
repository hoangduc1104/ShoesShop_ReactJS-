import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { FaHome, FaUserEdit } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import MenuItem from '../../../component/MenuItem';
import { STYLES } from '../../../constant';

const Sidebar = () => {
  var bool = localStorage.getItem('isShow_sidebar') === 'true';
  const [showBar, setShowBar] = useState(bool);

  useEffect(() => {
    setShowBar(bool);
  }, [bool]);

  return (
    <div
      className={`ease-linear duration-200 ${
        STYLES.background.bg_primary
      } shadow-[0_4px_6px_-1px_rgb(0,0,0,0.2),0_2px_4px_-6px_rgb(0,0,0,0.2)] h-full ${
        showBar ? STYLES.width.sidebar_lg : STYLES.width.sidebar_sm
      } fixed z-10`}
    >
      {showBar ? (
        <>
          <MenuItem
            icon={<AiOutlineLeft />}
            big
            className={'border-y-2'}
            onClick={() => setShowBar(!showBar)}
          >
            MENU
          </MenuItem>

          <div>
            <MenuItem icon={<FaHome />} big to="/">
              Trang chủ
            </MenuItem>
            <MenuItem
              icon={<FaUserEdit />}
              big
              className="border-b-2"
              to="/detail"
            >
              Tài khoản
            </MenuItem>
          </div>

          <MenuItem icon={<BiFilterAlt />} big>
            Lọc
          </MenuItem>
          <div className="absolute bottom-20  w-full">
            <MenuItem icon={<HiOutlineLogout />} big>
              Đăng xuất
            </MenuItem>
          </div>
        </>
      ) : (
        <>
          <MenuItem
            icon={<AiOutlineRight />}
            big
            className={'border-y-2'}
            onClick={() => setShowBar(!showBar)}
          ></MenuItem>

          <MenuItem icon={<FaHome />} big to="/"></MenuItem>
          <MenuItem
            icon={<FaUserEdit />}
            big
            to="/detail"
            className="border-b-2"
          ></MenuItem>
          <MenuItem
            icon={<BiFilterAlt />}
            big
            onClick={bool ? () => {} : () => setShowBar(!showBar)}
          ></MenuItem>
          <div className="absolute bottom-20  w-full">
            <MenuItem icon={<HiOutlineLogout />} big></MenuItem>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
