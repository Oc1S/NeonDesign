import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-badge';

export interface BadgeProps {
  count?: number;
  maxCount?: number;
  pointer?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showZero?: boolean;
  dot?: boolean;
}

const Badge: React.FC<BadgeProps> = ({
  count,
  maxCount,
  children,
  pointer,
  className: badgeClassName,
  style: badgeStyle,
  showZero,
  dot,
  ...rest
}) => {
  let showCount = count?.toString();
  if (typeof maxCount === 'number' && typeof count === 'number' && count > maxCount) {
    showCount = `${maxCount}+`;
  }

  const badgeClasses = classNames(`${prefix}`, badgeClassName, {
    [`${prefix}-pointer`]: pointer,
  });

  return (
    <div className={`${prefix}-container`}>
      {dot ? (
        <span className={`${badgeClasses} ${prefix}-dot`} style={badgeStyle} {...rest}></span>
      ) : (
        (!!count || showZero) && (
          <span className={badgeClasses} style={badgeStyle} {...rest}>
            {showCount}
          </span>
        )
      )}
      {children}
    </div>
  );
};

Badge.propTypes = {
  count: PropTypes.number,
  maxCount: PropTypes.number,
  pointer: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  showZero: PropTypes.bool,
  dot: PropTypes.bool,
};

export default Badge;
