import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidebar';

const Layout = () => {
  return (
    <div className="">
      <div className="bg-red fixed w-full z-10">
        <Header />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
