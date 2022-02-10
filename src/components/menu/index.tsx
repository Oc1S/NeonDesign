import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';

const prefix = 'neon-menu';

export type MenuProps = {
  className?: string;
  selectedIndex?: string;
  type?: string;
  // children: React.ReactNode | React.ReactNode[];
} & React.HTMLAttributes<HTMLUListElement>;

export interface MenuType extends React.FC<MenuProps> {
  item: typeof MenuItem;
  SubMenu: typeof SubMenu;
}

/* context */
export interface selectedIndexContentProps {
  selectedIndex: string;
  handleSelectIndex: (index: string) => void;
}

export const selectedIndexContext = React.createContext({} as selectedIndexContentProps);
export const typeContext = React.createContext('horizontal');

const Menu: MenuType = ({
  className,
  children,
  selectedIndex: propSelectedIndex = '',
  type = 'horizontal',
  ...rest
}) => {
  // 处理类名

  const [selectedIndex, setSelectedIndex] = useState(propSelectedIndex);

  const handleSelectIndex = (index: string) => {
    setSelectedIndex(index);
  };

  useEffect(() => setSelectedIndex(propSelectedIndex), [propSelectedIndex]);

  const classes = classNames(
    {
      [`${prefix}`]: type === 'horizontal',
      [`${prefix}-vertical`]: type === 'vertical',
    },
    className,
  );

  return (
    <selectedIndexContext.Provider value={{ selectedIndex, handleSelectIndex }}>
      <typeContext.Provider value={type}>
        <ul className={classes} {...rest}>
          {children}
        </ul>
      </typeContext.Provider>
    </selectedIndexContext.Provider>
  );
};

Menu.item = MenuItem;
Menu.SubMenu = SubMenu;

Menu.propTypes = {
  className: PropTypes.string,
  selectedIndex: PropTypes.string,
  type: PropTypes.string,
};

export default Menu;
