import React, { useEffect, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { BiFilterAlt } from 'react-icons/bi';
import { FaHome, FaUserEdit } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import Button from '../../../component/Button';
import MenuItem from '../../../component/MenuItem';
import { STYLES } from '../../../constant';

const Sidebar = ({ width, callBack, showBar }) => {
  return (
    <div
      className={`ease-linear duration-200 ${STYLES.background.bg_primary} shadow-[0_4px_6px_-1px_rgb(0,0,0,0.2),0_2px_4px_-6px_rgb(0,0,0,0.2)] h-full ${width} fixed z-10`}
    >
      {showBar ? (
        <>
          <MenuItem
            icon={<AiOutlineLeft />}
            big
            className={'border-y-2'}
            onClick={callBack}
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
              to="/user"
            >
              Tài khoản
            </MenuItem>
          </div>

          <div>
            <MenuItem icon={<BiFilterAlt />} big>
              Lọc
            </MenuItem>
            <form>
              <div className="flex leading-3 ">
                <span className="text-base flex ml-3 left my-auto">
                  Tối thiểu:{' '}
                </span>
                <input
                  type="number"
                  className="w-28 ml-2 h-8 rounded rinng-orange-600 ring-offset-transparent ring-0 ring-offset-0"
                />
                <p className={`ml-2 ${STYLES.text.text_orange}`}>đ</p>
              </div>
              <div className="flex leading-3  mt-4">
                <span className="text-base flex ml-3 left my-auto">
                  Tối đa:{' '}
                </span>
                <input
                  type="number"
                  className="w-28 ml-6 h-8 rounded rinng-orange-600 ring-offset-transparent ring-0 ring-offset-0"
                />
                <p className={`ml-2 ${STYLES.text.text_orange}`}>đ</p>
              </div>
              <div className="flex leading-3  mt-4">
                <span className="text-base flex ml-3 left my-auto">
                  Sắp xếp:{' '}
                </span>
                <select
                  name=""
                  id=""
                  className="w-32 ml-3 h-10 rounded rinng-orange-600 ring-offset-transparent ring-0 ring-offset-0"
                >
                  <option value="-1">Thấp - cao</option>
                  <option value="1">Cao - thấp</option>
                </select>
              </div>
              <div className="flex justify-end mr-8">
                <Button className="mt-4 px-2 py-1 flex " rouded small>
                  Áp dụng
                </Button>
              </div>
            </form>
          </div>
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
            onClick={callBack}
          ></MenuItem>

          <MenuItem icon={<FaHome />} big to="/"></MenuItem>
          <MenuItem
            icon={<FaUserEdit />}
            big
            to="/user"
            className="border-b-2"
          ></MenuItem>
          <MenuItem icon={<BiFilterAlt />} big onClick={callBack}></MenuItem>
          <div className="absolute bottom-20  w-full">
            <MenuItem icon={<HiOutlineLogout />} big></MenuItem>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
