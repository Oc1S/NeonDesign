import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-dropdown';

/* export type ButtonSize = 'small' | 'large' | 'middle';

export type SizeMap = Record<Required<BaseButtonProps>['size'], string>;

const sizes: SizeMap = {
  middle: '',
  small: `${prefix}-sm`,
  large: `${prefix}-lg`,
}; */

export interface DropdownProps {
  className?: string;
  style?: React.CSSProperties;
}

const Dropdown: React.FC<DropdownProps> = ({ className, children, ...rest }) => {
  // 处理类名
  const classes = classNames(`${prefix}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Dropdown.propTypes = {};

export default Dropdown;
