import React from 'react';
import classNames from 'classnames';
import { prefix } from './index';

/* export interface LayoutSiderProps {
  className?: string;
} */

const Sider: React.FC<React.BaseHTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames(`${prefix}-sider`, className);
  return (
    <aside className={classes} {...rest}>
      {children}
    </aside>
  );
};

export default Sider;
