import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { STYLES } from '../../constant';
function Button({
  to,
  href,
  type,
  primary = false,
  disabled = false,
  text = false,
  small,
  rouded,
  children,
  className,
  classNameOutline,
  leftIcon,
  onClick,
  onMouseDown,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    onMouseDown,
    ...passProps,
  };

  if (disabled) {
    delete props.onClick;
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp
      className={`
        flex items-center justify-center ${
          rouded ? 'rounded-md' : ''
        } border border-transparent bg-orange-600 ${
        small ? 'px-3 py-1' : 'px-6 py-3'
      } text-base font-medium text-white shadow-sm hover:opacity-80 ${
        STYLES.text.text_white
      } ${className}`}
      type={type}
      {...props}
    >
      {leftIcon && (
        <>
          <span className="icon my-auto text-2xl">{leftIcon}</span>
          <span className="w-3"></span>
        </>
      )}
      {children}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
};

export default Button;
