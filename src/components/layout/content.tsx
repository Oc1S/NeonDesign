import React from 'react';
import classNames from 'classnames';
import { prefix } from './index';

/* export interface LayoutContentProps {
  className?: string;
} */

const Content: React.FC<React.BaseHTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames(`${prefix}-content`, className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Content;
