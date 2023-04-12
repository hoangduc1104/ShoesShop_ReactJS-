import React from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { HiOutlineLogout } from 'react-icons/hi';
import { STYLES } from '../../constant';
import MenuItem from '../MenuItem';

function DropdownComponent({
  footer,
  children,
  footerChild,
  className,
  props,
}) {
  return (
    <>
      <div
        className={`${STYLES.background.bg_secondary} z-10 divide-y divide-gray-100 rounded-lg overflow-hidden shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 ${className}`}
      >
        {children}
        {footer && <div className="">{footerChild}</div>}
      </div>
    </>
  );
}

export default DropdownComponent;
