import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export const prefix = 'neon-layout';

export interface LayoutProps {
  className?: string;
}

export interface LayoutType extends React.FC<LayoutProps> {
  Header: typeof Header;
  Main: typeof Main;
  Footer: typeof Footer;
}

const Layout: LayoutType = ({ children, className, ...rest }) => {
  // 处理类名
  const classes = classNames(`${prefix}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
      {/* <header className={`${prefix}-header`}>HEADER</header>
      <div className={`${prefix}-main`}>
        <div className={`${prefix}-sider`}>SIDER</div>
        <div className={`${prefix}-content`}>CONTENT</div>
      </div>
      <footer className={`${prefix}-footer`}>FOOTER</footer> */}
    </div>
  );
};

Layout.Header = Header;
Layout.Main = Main;
Layout.Footer = Footer;

Layout.propTypes = {
  className: PropTypes.string,
};

export default Layout;
