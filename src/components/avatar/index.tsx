import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes, { oneOf } from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-avatar';

export type SizeType = 'sm' | 'md' | 'lg';
export type ShapeType = 'square' | 'circle';

export interface AvatarProps {
  size?: SizeType | number;
  shape?: ShapeType;
  src: string;
  alt?: string;
  style?: React.CSSProperties;
}

type SizeMap = Record<Required<AvatarProps>['size'], string>;

const sizes: SizeMap = {
  sm: `${prefix}-sm`,
  md: `${prefix}-md`,
  lg: `${prefix}-lg`,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = '',
  size = 'md',
  shape = 'circle',
  style,
  children,
  ...rest
}) => {
  const classes = classNames(`${prefix}`, {
    [`${prefix}-circle`]: shape === 'circle',
    [sizes[size]]: typeof size === 'string',
  });

  const sizeStyle =
    typeof size === 'number'
      ? {
          width: size,
          height: size,
        }
      : {};

  return (
    <img className={classes} src={src} alt={alt} {...rest} style={{ ...style, ...sizeStyle }} />
  );
};

Avatar.propTypes = {
  // size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  shape: oneOf(['square', 'circle']),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;
