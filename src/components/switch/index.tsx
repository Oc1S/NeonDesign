import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-switch';

export type SizeType = 'sm' | 'default';

export interface SwitchProps {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  size?: SizeType;
  onClick?: (e?: React.MouseEvent, ...args: any) => any;
  onChange?: (...args: any) => any;
}

const Switch: React.FC<SwitchProps> = ({
  children,
  checked,
  className,
  disabled,
  size = 'default',
  onClick,
  onChange,
  ...rest
}) => {
  useEffect(() => {
    onChange?.();
  }, [checked]);

  const handleClick = (e: React.MouseEvent) => {
    if (disabled) return;
    onClick?.(e);
  };

  const classes = classNames(`${prefix}`, className, {
    [`${prefix}-on`]: checked,
    [`${prefix}-disabled`]: disabled,
    [`${prefix}-sm`]: size === 'sm',
  });

  return <input type="checkbox" className={classes} onClick={(e) => handleClick(e)} {...rest} />;
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'default']),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};

export default Switch;
