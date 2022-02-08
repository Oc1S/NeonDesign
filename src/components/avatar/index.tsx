import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-avatar';

type sizeType = 'sm' | 'md' | 'lg';

export interface AvatarProps {
  size?: string | number;
  shape?: string;
  src?: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size, shape, ...rest }) => {
  const classes = classNames(`${prefix}`);
  return (
    <img
      className={classes}
      src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      alt=""
    />
  );
};

Avatar.propTypes = {};

export default Avatar;
