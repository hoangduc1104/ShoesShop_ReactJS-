import React from 'react';
import { STYLES } from '../../constant';

function MenuItem({
  icon,
  children,
  onClick,
  className,
  big = false,
  ...passProps
}) {
  const props = {
    onClick,
    ...passProps,
  };
  return (
    <div>
      <a
        href="#"
        className={`${STYLES.text.text_secondary} text-sm flex hover:text-orange-600 hover:bg-orange-100 pl-3 ${className}`}
        {...props}
      >
        <span className={`my-auto py-2 ${big ? 'text-3xl' : 'text-2xl'}`}>
          {icon}
        </span>
        <span
          className={`block ${
            big ? 'text-xl' : 'text-base'
          } font-lg pl-2 py-2 hover:bg- dark:hover:bg-gray-600 dark:hover:${
            STYLES.text.text_orange
          }`}
        >
          {children}
        </span>
      </a>
    </div>
  );
}

export default MenuItem;
