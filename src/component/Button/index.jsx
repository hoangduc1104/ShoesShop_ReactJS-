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
  rouded,
  children,
  className,
  leftIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
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
    <div
      className={`${
        STYLES.button.primary
      } hover:opacity-80 w-max h-full max-h-12 overflow-hidden ${
        rouded && 'rounded-md'
      }`}
      {...props}
    >
      <Comp
        className={`px-5 py-3 flex my-auto ${STYLES.text.text_white} text-lg font-semibold ${className}`}
        type={type}
        {...props}
      >
        {leftIcon && (
          <>
            <span className="icon my-auto text-2xl">{leftIcon}</span>
            <span className="w-3"></span>
          </>
        )}
        {children && (
          <span className="title my-auto leading-4">{children}</span>
        )}
      </Comp>
    </div>
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
