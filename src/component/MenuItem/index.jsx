import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { STYLES } from '../../constant';

function MenuItem({
  icon,
  to,
  href,
  children,
  onClick,
  className,
  big = false,
  active,
  ...passProps
}) {
  let Comp = 'a';

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const navLinkClass = ({ isActive }) => {
    return isActive
      ? `${STYLES.text.text_orange} text-sm flex hover:text-orange-600 hover:bg-orange-100 pl-3 ${className}`
      : `${STYLES.text.text_secondary} text-sm flex hover:text-orange-600 hover:bg-orange-100 pl-3 ${className}`;
  };

  return (
    <div>
      {to ? (
        <Comp to={to} className={navLinkClass} {...props}>
          <span className={`my-auto py-2 ${big ? 'text-3xl' : 'text-2xl'}`}>
            {icon}
          </span>
          <span
            className={`block ${
              big ? 'text-xl' : 'text-base'
            } font-lg pl-2 py-2 hover:${STYLES.text.text_orange}`}
          >
            {children}
          </span>
        </Comp>
      ) : (
        <Comp
          className={` text-sm flex hover:text-orange-600 hover:bg-orange-100 pl-3 ${className}`}
          {...props}
        >
          <span className={`my-auto py-2 ${big ? 'text-3xl' : 'text-2xl'}`}>
            {icon}
          </span>
          <span
            className={`block ${
              big ? 'text-xl' : 'text-base'
            } font-lg pl-2 py-2 hover:${STYLES.text.text_orange}`}
          >
            {children}
          </span>
        </Comp>
      )}
    </div>
  );
}

export default MenuItem;
