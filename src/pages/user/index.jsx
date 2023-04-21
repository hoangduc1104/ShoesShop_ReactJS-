import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../../component/Button';
import avatar from '../../ava.png';
import { STYLES } from '../../constant';
import { getUser } from '../../helper/auth';

const UserPage = () => {
  const [showBar] = useOutletContext();

  return (
    <>
      <div className="h-max min-h-screen">
        <div
          className={`${
            showBar ? '' : 'md:grid md:grid-cols-5'
          } lg:grid lg:grid-cols-5 gap-8`}
        >
          <div
            className={`${
              showBar ? '' : 'md:col-span-2 md:h-1/2'
            } lg:col-span-2 lg:h-1/2`}
          >
            <img
              src={avatar}
              className="w-[300px] h-[300px] rounded-full mx-auto mb-5"
              alt=""
            />

            <span className={`${STYLES.text.text_orange} font-medium text-xl`}>
              {getUser().username}
            </span>
          </div>
          <div
            className={`${
              showBar ? '' : 'md:col-span-3 md:top-0'
            } lg:col-span-3 lg:top-0 border-l-2 border-orange-100 text-left mt-10 -ml-5`}
          >
            <div className="flex pl-10">
              <span
                className={`flex text-md font-medium mr-3 leading-5 items-center justify-center`}
              >
                Họ tên:
              </span>
              <input
                type="text"
                value={getUser().username}
                readOnly
                className={`border-0 ${STYLES.background.bg_secondary} ${STYLES.text.text_orange} text-xl font-bold focus:ring-0 border-b-2 border-orange-600 py-0 focus:ring-offset-0 focus:shadow-none`}
              />
            </div>
            <div className="flex pl-10 mt-5">
              <span className={`flex text-md font-medium mr-3 leading-5`}>
                Địa chỉ:
              </span>
              <p
                className={`border-0 ${STYLES.background.bg_secondary} ${STYLES.text.text_secondary} text-md font-medium py-0`}
              >
                {getUser().address}
              </p>
            </div>
            <div className="flex pl-10 mt-5 w-full">
              <span
                className={`flex text-md font-medium mr-3 leading-5 items-center justify-center`}
              >
                Email:
              </span>
              <input
                type="text"
                value={getUser().email}
                readOnly
                className={`border-0 ${STYLES.background.bg_secondary} ${STYLES.text.text_secondary} text-md font-medium focus:ring-0 py-0 focus:ring-offset-0 focus:shadow-none w-full`}
              />
            </div>
            <div className="flex pl-10 mt-5 w-full">
              <span
                className={`flex text-md font-medium mr-3 leading-5 items-center justify-center`}
              >
                Số điện thoại:
              </span>
              <input
                type="text"
                value={getUser().phone}
                readOnly
                className={`border-0 ${STYLES.background.bg_secondary} ${STYLES.text.text_secondary} text-md font-medium focus:ring-0 py-0 focus:ring-offset-0 focus:shadow-none`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
