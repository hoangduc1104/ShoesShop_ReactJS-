import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { STYLES } from '../../constant';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Header from './header';
import Sidebar from './sidebar';

const Layout = () => {
  const { height, width } = useWindowDimensions();
  useEffect(() => {
    if (width < 1025) localStorage.setItem('isShow_sidebar', false);
    else localStorage.setItem('isShow_sidebar', true);
  }, [width]);

  var bool = localStorage.getItem('isShow_sidebar') === 'true';
  const [showBar, setShowBar] = useState(bool);

  useEffect(() => {
    setShowBar(bool);
  }, [bool]);

  return (
    <div className="max-w-screen-xl relative">
      <div className="bg-red fixed w-full z-30">
        <Header />
      </div>
      <div className="flex relative top-20 w-full">
        <Sidebar />
        <div
          className={`${STYLES.background.bg_secondary} absolute ${
            showBar
              ? STYLES.width.container_left_lg
              : STYLES.width.container_left_sm
          } m-auto px-0 w-[calc(100%-240px)]`}
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
