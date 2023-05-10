import React from 'react';
import { STYLES } from '../../constant';

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
        className={`${STYLES.background.bg_secondary} relative z-10  rounded-lg overflow-hidden shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 ${className}`}
      >
        {children}
        {footer && <div className="">{footerChild}</div>}
      </div>
    </>
  );
}

export default DropdownComponent;
