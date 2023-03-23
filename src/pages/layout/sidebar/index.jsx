import React, { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import MenuItem from '../../../component/MenuItem';
import { STYLES } from '../../../constant';

const Sidebar = () => {
  const [showBar, setShowBar] = useState(false);
  return (
    <div
      className={`${
        STYLES.background.bg_primary
      } shadow-[0_4px_6px_-1px_rgb(0,0,0,0.2),0_2px_4px_-6px_rgb(0,0,0,0.2)] h-full ${
        showBar ? STYLES.width.sidebar_lg : STYLES.width.sidebar_sm
      } fixed z-10`}
    >
      {showBar ? (
        <MenuItem
          icon={<HiMenu />}
          big
          className={'border-y-2'}
          onClick={() => setShowBar(!showBar)}
        >
          MENU
        </MenuItem>
      ) : (
        <MenuItem
          icon={<HiMenu />}
          big
          className={'border-y-2'}
          onClick={() => setShowBar(!showBar)}
        ></MenuItem>
      )}
    </div>
  );
};

export default Sidebar;
