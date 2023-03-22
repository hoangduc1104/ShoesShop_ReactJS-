import React from 'react';
import { Outlet } from 'react-router-dom';
import { STYLES } from '../../constant/style';
import Header from './header';
import Sidebar from './sidebar';

const Layout = () => {
  return (
    <div className="">
      <div className="bg-red fixed w-full z-30">
        <Header />
      </div>
      <div className="flex relative top-20 w-full">
        <Sidebar />
        <div
          className={`${STYLES.background.bg_secondary} absolute left-${STYLES.width.sidebar_lg} m-auto px-0 w-[calc(100%-240px)]`}
        >
          <div className="container p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
