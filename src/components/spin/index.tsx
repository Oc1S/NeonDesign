import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useDebounce } from '../../hooks';

const prefix = 'neon-spin';

export type SizeType = 'sm' | 'default' | 'lg';
export type TypeEnums = 'circle' | 'expand' | 'chase' | 'fadingCircle' | 'foldingCube';

export interface SpinProps {
  spinning: boolean;
  type?: TypeEnums;
  size?: SizeType;
  delay?: number;
  color?: string;
}

export type TypeMap = Record<
  Required<SpinProps>['type'],
  (className: string) => React.ReactElement
>;

export type SizeMap = Record<Required<SpinProps>['size'], string>;

const sizes: SizeMap = {
  default: '',
  sm: `${prefix}-sm`,
  lg: `${prefix}-lg`,
};

const renderCircle = (className: string) => {
  return (
    <div className={`${prefix}-circle ${className}`}>
      <div className={`${prefix}-circle-child1`}></div>
      <div className={`${prefix}-circle-child2`}></div>
      <div className={`${prefix}-circle-child3`}></div>
      <div className={`${prefix}-circle-child4`}></div>
      <div className={`${prefix}-circle-child5`}></div>
      <div className={`${prefix}-circle-child6`}></div>
      <div className={`${prefix}-circle-child7`}></div>
      <div className={`${prefix}-circle-child8`}></div>
      <div className={`${prefix}-circle-child9`}></div>
      <div className={`${prefix}-circle-child10`}></div>
      <div className={`${prefix}-circle-child11`}></div>
      <div className={`${prefix}-circle-child12`}></div>
    </div>
  );
};

const renderExpand = (className: string) => {
  return (
    <div className={`${prefix}-expand ${className}`}>
      <div className={`${prefix}-expand-rect1`}></div>
      <div className={`${prefix}-expand-rect2`}></div>
      <div className={`${prefix}-expand-rect3`}></div>
      <div className={`${prefix}-expand-rect4`}></div>
      <div className={`${prefix}-expand-rect5`}></div>
    </div>
  );
};
const renderChase = (className: string) => {
  return (
    <div className={`${prefix}-chase ${className}`}>
      <div className={`${prefix}-chase-dot`}></div>
      <div className={`${prefix}-chase-dot`}></div>
      <div className={`${prefix}-chase-dot`}></div>
      <div className={`${prefix}-chase-dot`}></div>
      <div className={`${prefix}-chase-dot`}></div>
      <div className={`${prefix}-chase-dot`}></div>
    </div>
  );
};

const renderFadingCircle = (className: string) => {
  return (
    <div className={`${prefix}-fading-circle ${className}`}>
      <div className={`${prefix}-fading-circle-dot1`}></div>
      <div className={`${prefix}-fading-circle-dot2`}></div>
      <div className={`${prefix}-fading-circle-dot3`}></div>
      <div className={`${prefix}-fading-circle-dot4`}></div>
      <div className={`${prefix}-fading-circle-dot5`}></div>
      <div className={`${prefix}-fading-circle-dot6`}></div>
      <div className={`${prefix}-fading-circle-dot7`}></div>
      <div className={`${prefix}-fading-circle-dot8`}></div>
      <div className={`${prefix}-fading-circle-dot9`}></div>
      <div className={`${prefix}-fading-circle-dot10`}></div>
      <div className={`${prefix}-fading-circle-dot11`}></div>
      <div className={`${prefix}-fading-circle-dot12`}></div>
    </div>
  );
};

const renderFoldingCube = (className: string) => {
  return (
    <div className={`${prefix}-folding-cube ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

const types: TypeMap = {
  circle: renderCircle,
  expand: renderExpand,
  chase: renderChase,
  fadingCircle: renderFadingCircle,
  foldingCube: renderFoldingCube,
};

const Spin: React.FC<SpinProps> = ({
  children,
  spinning,
  color,
  delay = 0,
  type = 'circle',
  size = 'default',
}) => {
  const [rendered, setRendered] = useState(spinning);

  const setRenderedDebounce = useDebounce((rendered: boolean) => {
    setRendered(rendered);
  }, delay);

  useEffect(() => {
    setRenderedDebounce(spinning);
  }, [spinning]);

  const classes = classNames(`${prefix}`, sizes[size]);
  return rendered ? (
    // @ts-ignore
    <div className={`${prefix}-wrapper`} style={{ '--neon-spin-bgColor': color }}>
      {types[type](classes)}
      <div className={`${prefix}-content`}>{children}</div>
    </div>
  ) : null;
};

Spin.propTypes = {
  spinning: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['circle', 'expand', 'chase', 'fadingCircle', 'foldingCube']),
  size: PropTypes.oneOf(['sm', 'default', 'lg']),
  delay: PropTypes.number,
  color: PropTypes.string,
};

export default Spin;
