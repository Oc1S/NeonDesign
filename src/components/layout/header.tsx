import React from 'react';
import classNames from 'classnames';
import { prefix } from './index';

const Header: React.FC<React.BaseHTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames(`${prefix}-header`, className);
  return (
    <header className={classes} {...rest}>
      {children}
    </header>
  );
};

export default Header;
