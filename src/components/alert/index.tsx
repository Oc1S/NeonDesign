import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close as CloseIcon } from '../icon';

const prefix = 'neon-alert';

interface AlertProps {
  type?: 'default' | 'dark';
  className?: string;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  contentStyle?: React.CSSProperties;
  title?: string;
  closeable?: boolean;
  onClose?: (e?: React.MouseEvent) => any;
  duration?: number;
}

export type TypeMap = Record<Required<AlertProps>['type'], string>;

const types: TypeMap = {
  default: '',
  dark: `${prefix}-dark`,
};

const Alert: React.FC<AlertProps> = ({
  children,
  type = 'default',
  title,
  onClose,
  closeable,
  style,
  duration,
  contentStyle,
  titleStyle,
  className,
  ...rest
}) => {
  const [isClosed, setIsClosed] = useState(false);
  const [page, setPage] = useState(0);

  const handleAnimationEnd = () => {
    if (Array.isArray(children)) {
      page === children.length - 1 ? setPage(0) : setPage((page) => page + 1);
    }
  };
  let animationDuration = '5s';
  if (duration) {
    animationDuration = `${duration}s`;
  }
  const handleClose = (e: React.MouseEvent) => {
    onClose?.(e);
    setIsClosed(true);
  };
  const classes = classNames(`${prefix}`, className, types[type]);
  const titleClasses = classNames(`${prefix}-title`);
  const contentClasses = classNames(`${prefix}-content`, {
    [`${prefix}-show`]: Array.isArray(children),
  });

  return !isClosed ? (
    <div className={classes} style={style} {...rest}>
      {/* title */}
      {!!title && (
        <div className={titleClasses}>
          <div>{title}</div>
          <span className={`${prefix}-icon-close`} onClick={(e) => handleClose(e)}>
            {closeable && <CloseIcon />}
          </span>
        </div>
      )}
      {/* content */}
      <div className={`${prefix}-content-container`}>
        {Array.isArray(children) ? (
          children.map(
            (child, index) =>
              page === index && (
                <div
                  className={contentClasses}
                  onAnimationEnd={handleAnimationEnd}
                  key={index}
                  style={{ ...contentStyle, animationDuration }}
                >
                  {child}
                </div>
              ),
          )
        ) : (
          <div className={contentClasses}>{children}</div>
        )}
        {/* close-icon */}
        <span className={`${prefix}-icon-close`} onClick={(e) => handleClose(e)}>
          {!title && !!closeable && <CloseIcon />}
        </span>
      </div>
    </div>
  ) : null;
};
Alert.propTypes = {
  type: PropTypes.oneOf(['default', 'dark']),
  className: PropTypes.string,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  title: PropTypes.string,
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
  duration: PropTypes.number,
};

export default Alert;
