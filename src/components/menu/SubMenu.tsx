import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { typeContext } from './index';
import MenuItem from './MenuItem';

const prefix = 'neon-menu-submenu';

export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title: string;
  children: ReturnType<typeof MenuItem> | ReturnType<typeof MenuItem>[] | typeof MenuItem;
}

export type subItemStateType = {
  active: boolean;
  index: string;
};

/* context */
export interface selectedIndexsContentProps {
  subItemStateArray: subItemStateType[];
  setSubItemStateArray: React.Dispatch<React.SetStateAction<subItemStateType[]>>;
}

export const activeContext = React.createContext({} as selectedIndexsContentProps);

const SubMenu: React.FC<MenuItemProps> = ({
  className,
  children,
  title,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...rest
}) => {
  const [isHover, setIsHover] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [subItemStateArray, setSubItemStateArray] = useState<Array<subItemStateType>>([]);

  const type = useContext(typeContext);

  useEffect(() => {
    const res = !subItemStateArray.every((item) => !item.active);

    // console.log('isactive ', res, subItemStateArray);

    setIsActive(res);
  }, [subItemStateArray]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    !!onMouseEnter && onMouseEnter(e);
    type === 'horizontal' ? setIsHover(true) : null;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    !!onMouseLeave && onMouseLeave(e);
    type === 'horizontal' ? setIsHover(false) : null;
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    !!onClick && onClick(e);
    e.stopPropagation();

    setIsToggled(!isToggled);
  };

  const classes = classNames(`${prefix}`, className);

  const popupClasses = classNames(`${prefix}-popup`, {
    [`${prefix}-popup-visible`]: isHover,
  });
  const popupContainerClasses = classNames(`${prefix}-popup-container`);

  const collapseClasses = classNames(`${prefix}-collapse`);
  const collapseContainerClasses = classNames(`${prefix}-collapse-container`);

  const collapseHeight = Array.isArray(children) ? `${children.length * 2.5}em` : '2.5em';

  return type === 'horizontal' ? (
    <li
      className={classes}
      {...rest}
      onMouseEnter={(e) => handleMouseEnter(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      onClick={onClick}
    >
      <span>{title}</span>
      <div className={popupClasses}>
        <ul className={popupContainerClasses}>{children}</ul>
      </div>
    </li>
  ) : (
    // vertical
    <li
      className={classes}
      {...rest}
      onClick={(e) => handleClick(e)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <span className={`${isActive ? 'neon-menu-submenu-active' : ''}`}>{title}</span>
      <div className={collapseClasses} style={{ maxHeight: isToggled ? collapseHeight : '' }}>
        <activeContext.Provider value={{ subItemStateArray, setSubItemStateArray }}>
          <ul className={collapseContainerClasses}>{children}</ul>
        </activeContext.Provider>
      </div>
    </li>
  );
};

SubMenu.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default SubMenu;
