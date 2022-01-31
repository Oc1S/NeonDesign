import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-btn';

export type ButtonSize = 'small' | 'large' | 'middle';

export interface BaseButtonProps {
  size?: ButtonSize;
  square?: boolean;
  block?: boolean;
  disabled?: boolean;
}

export type SizeMap = Record<Required<BaseButtonProps>['size'], string>;

const sizes: SizeMap = {
  middle: '',
  small: `${prefix}-sm`,
  large: `${prefix}-lg`,
};

type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement> &
  React.AnchorHTMLAttributes<HTMLElement>;

const Button: React.FC<ButtonProps> = ({
  className,
  children,
  disabled,
  block,
  square,
  size = 'middle',
  onClick,
  href,
  ...rest
}) => {
  // 处理类名
  const classes = classNames(
    'neon-btn',
    sizes[size],
    { 'neon-btn-block': !!block },
    { 'neon-btn-disabled': !!disabled },
    { 'neon-btn-square': !!square },
    className,
  );

  // 处理点击事件
  const handleClick = (e: React.MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    (onClick as React.MouseEventHandler)?.(e);
  };

  if (href !== undefined) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  square: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Button;
