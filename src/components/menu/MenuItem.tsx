import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { selectedIndexContext } from './index';
import { activeContext } from './SubMenu';

const prefix = 'neon-menu-item';
export interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  nav?: string;
  index: string;
  disabled?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  className,
  children,
  nav,
  index,
  onClick,
  disabled,
  ...rest
}) => {
  const { selectedIndex, handleSelectIndex } = useContext(selectedIndexContext);
  const { subItemStateArray, setSubItemStateArray } = useContext(activeContext);
  useEffect(() => {
    if (!subItemStateArray) return;
    const subItemIndex = subItemStateArray.findIndex((item) => item.index === index);
    if (subItemIndex === -1) {
      subItemStateArray.push({ index, active: index === selectedIndex });
      /*
       *展开运算符添加数组元素未生效?
       */
      setSubItemStateArray([...subItemStateArray]);
    } else {
      subItemStateArray[subItemIndex].active = index === selectedIndex;
      setSubItemStateArray([...subItemStateArray]);
    }
  }, [selectedIndex]);

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (disabled) return;
    e.stopPropagation();
    onClick?.(e);
    handleSelectIndex?.(index);
  };

  const classes = classNames(`${prefix}`, className, {
    [`${prefix}-selected`]: !!index && selectedIndex === index,
    [`${prefix}-disabled`]: disabled,
  });

  return (
    <li className={classes} {...rest} onClick={(e) => handleClick(e)}>
      {children}
    </li>
  );
};

MenuItem.propTypes = {
  index: PropTypes.string.isRequired,
  nav: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default MenuItem;
