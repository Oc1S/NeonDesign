import React from 'react';
import classNames from 'classnames';
import { prefix } from './index';
import Sider from './Sider';
import Content from './Content';

/* export interface LayoutMainProps {
  className?: string;
} */

export interface LayoutMainType extends React.FC<React.BaseHTMLAttributes<HTMLElement>> {
  Sider: typeof Sider;
  Content: typeof Content;
}

const Main: LayoutMainType = ({ children, className, ...rest }) => {
  const classes = classNames(`${prefix}-main`, className);
  return (
    <main className={classes} {...rest}>
      {children}
    </main>
  );
};

Main.Sider = Sider;
Main.Content = Content;

export default Main;
