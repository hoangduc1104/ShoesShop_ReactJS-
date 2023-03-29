import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { STYLES } from '../../constant';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Cart from '../cart';
import Footer from './footer';
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
  const [widthSidebar, setWidthSidebar] = useState();

  function handleShowbar() {
    return showBar
      ? setWidthSidebar(STYLES.width.sidebar_lg)
      : setWidthSidebar(STYLES.width.sidebar_sm);
  }

  function handleSetShowbar() {
    setShowBar(!showBar);
  }
  useEffect(() => {
    setShowBar(bool);
  }, [bool]);

  useEffect(() => {
    handleShowbar();
  }, [showBar]);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div className="bg-red fixed w-full max-w-screen-2xl z-30">
        <Header />
      </div>
      <div className="flex relative top-20 w-full">
        <Sidebar
          width={widthSidebar}
          callBack={handleSetShowbar}
          showBar={showBar}
        />
        <div
          className={`${STYLES.background.bg_secondary} ${
            showBar
              ? STYLES.width.container_left_lg
              : STYLES.width.container_left_sm
          } 
          ${
            showBar ? STYLES.width.ml_lg : STYLES.width.ml_sm
          } m-auto px-0 flex-1`}
        >
          <div className="container p-6">
            <Outlet context={[showBar]} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
