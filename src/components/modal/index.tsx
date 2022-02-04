import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const prefix = 'neon-modal';

export interface ModalProps {}

const Modal: React.FC<any> = ({ className, children, ...rest }) => {
  // 处理类名
  const classes = classNames(`${prefix}`, className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
