import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../button';
import 'animate.css';

const prefix = 'neon-modal';

export interface ModalProps {
  visible: boolean;
  okText?: string;
  cancelText?: string;
  width?: number | string;
  zIndex?: number | string;
  closeable?: boolean;
  modalClassName?: string;
  modalStyle?: React.CSSProperties;
  title?: React.ReactNode;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  bodyClassName?: string;
  bodyStyle?: React.CSSProperties;
  mask?: boolean;
  maskStyle?: React.CSSProperties;
  maskClassName?: string;
  maskClosable?: boolean;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  afterClose?: (...args: any[]) => any;
  destroyOnClose?: boolean;
  noFooter?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  closeable = true,
  width,
  zIndex = 1000,
  okText = '确定',
  cancelText = '取消',
  children,
  visible = false,
  modalClassName,
  modalStyle,
  titleClassName,
  titleStyle,
  bodyClassName,
  bodyStyle,
  maskStyle,
  maskClassName,
  maskClosable = true,
  title,
  destroyOnClose,
  noFooter,
  onOk,
  onCancel,
  afterClose,

  ...rest
}) => {
  const [isRender, setIsRender] = useState(false);

  //根据visible渲染modal 以及处理关闭事件
  useEffect(() => {
    if (visible) {
      !isRender && setIsRender(true);
      cancelScroll();
    } else {
      enableScroll();
      handleClose();
    }
  }, [visible]);

  // 关闭时回调 visible改变时调用
  const handleClose = () => {
    afterClose?.();
    destroyOnClose &&
      setTimeout(() => {
        setIsRender(false);
      }, 500);
  };

  // 确定时回调
  const handleOk = (e: React.MouseEvent) => {
    onOk?.(e);
  };
  // 取消时回调
  const handleCancel = (e: React.MouseEvent) => {
    onCancel?.(e);
  };
  // 点击遮罩
  const handleMaskClicked = (e: React.MouseEvent) => {
    maskClosable && handleCancel(e);
  };
  // 取消滚动
  const cancelScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  };
  // 激活滚动
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  /* 处理类名 */
  const modalClasses = classNames(`${prefix}`, modalClassName, 'animate__animated', {
    animate__zoomIn: visible,
    animate__zoomOut: !visible,
    [`${prefix}-invisible`]: !visible,
  });
  const titleClasses = classNames(`${prefix}-title`, titleClassName);
  const bodyClasses = classNames(`${prefix}-body`, bodyClassName);
  const maskClasses = classNames(`neon-mask`, maskClassName);

  return isRender ? (
    <Fragment>
      {visible ? (
        <div className={maskClasses} onClick={handleMaskClicked} style={maskStyle}></div>
      ) : null}

      <div className={`${modalClasses}`} style={{ ...modalStyle, ...{ width, zIndex } }} {...rest}>
        {closeable ? (
          <span className="neon-icon-close" onClick={handleCancel}>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
              <defs>
                <style type="text/css"></style>
              </defs>
              <path
                d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z"
                p-id="3112"
                fill="#ffffff"
              ></path>
            </svg>
          </span>
        ) : null}
        {title && (
          <header className={titleClasses} style={titleStyle}>
            {title}
          </header>
        )}
        <div className={bodyClasses} style={bodyStyle}>
          {children}
        </div>
        {!noFooter ? (
          <footer className={`${prefix}-footer`}>
            <Button className={`${prefix}-btn`} onClick={handleCancel}>
              {cancelText}
            </Button>
            <Button className={`${prefix}-btn`} onClick={handleOk}>
              {okText}
            </Button>
          </footer>
        ) : null}
      </div>
    </Fragment>
  ) : null;
};

Modal.propTypes = {
  visible: PropTypes.bool.isRequired,
  title: PropTypes.node,
  okText: PropTypes.string,
  cancelText: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  zIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  closeable: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.object,
  titleClassName: PropTypes.string,
  titleStyle: PropTypes.object,
  bodyClassName: PropTypes.string,
  bodyStyle: PropTypes.object,
  mask: PropTypes.bool,
  maskStyle: PropTypes.object,
  maskClassName: PropTypes.string,
  maskClosable: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  afterClose: PropTypes.func,
  destroyOnClose: PropTypes.bool,
  noFooter: PropTypes.bool,
};

export default Modal;
