import React from 'react';
import { STYLES } from '../../../constant/style';

const Sidebar = () => {
  return (
    <div
      className={`bg-green-700 h-full w-${STYLES.width.sidebar_lg} fixed z-10`}
    >
      <p>Sidebar</p>
    </div>
  );
};

export default Sidebar;
