import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-divider';

export type Orientation = 'left' | 'center' | 'right';

export interface DividerProps {
  // children?: React.ReactNode;
  dashed?: boolean;
  className?: string;
  orientation?: Orientation;
  orientationMargin?: string | number;
  plain?: boolean;
  vertical?: boolean;
}

export type OrientationMap = Record<Required<DividerProps>['orientation'], string>;

const orientations: OrientationMap = {
  center: '',
  left: `${prefix}-l`,
  right: `${prefix}-r`,
};

const Divider: React.FC<DividerProps> = ({
  children,
  dashed,
  orientation = 'center',
  orientationMargin,
  plain,
  className,
  vertical,
  ...rest
}) => {
  // 处理类名
  const classes = classNames(
    `${prefix}`,
    {
      [`${prefix}-dashed`]: dashed,
      [`${prefix}-no-left-line`]: !!orientationMargin && orientation === 'left',
      [`${prefix}-no-right-line`]: !!orientationMargin && orientation === 'right',
    },
    orientations[orientation],
    className,
  );

  const innerClasses = classNames(`${prefix}-inner`, { [`${prefix}-inner-plain`]: plain });

  const innerStyle = {
    ...(!!orientationMargin && orientation === 'left' && { marginLeft: orientationMargin }),
    ...(!!orientationMargin && orientation === 'right' && { marginRight: orientationMargin }),
  };

  if (!!orientationMargin) {
    if (orientation === 'left') {
    }
  }

  if (vertical) {
    return <div className={`${prefix}-vertical`} {...rest}></div>;
  }

  return (
    <div className={classes} {...rest}>
      {children && (
        <span className={innerClasses} style={innerStyle}>
          {children}
        </span>
      )}
    </div>
  );
};

Divider.propTypes = {
  dashed: PropTypes.bool,
  className: PropTypes.string,
  orientation: PropTypes.oneOf(['left', 'center', 'right']),
  orientationMargin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  plain: PropTypes.bool,
  vertical: PropTypes.bool,
};

export default Divider;
