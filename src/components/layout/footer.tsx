import React from 'react';
import classNames from 'classnames';
import { prefix } from './index';

const Footer: React.FC<React.BaseHTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames(`${prefix}-footer`, className);
  return (
    <footer className={classes} {...rest}>
      {children}
    </footer>
  );
};

export default Footer;
