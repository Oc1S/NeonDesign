import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from '../icon';

const prefix = 'neon-drawer';

export type PlacementType = 'right' | 'left';

export interface DrawerProps {
  mask?: boolean;
  title?: React.ReactNode;
  visible: boolean;
  onClose: (e: React.MouseEvent) => any;
  maskClosable?: boolean;
  placement?: PlacementType;
  style?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  width?: number;
}

export type PlacementMap = Record<Required<DrawerProps>['placement'], string>;

const placements: PlacementMap = {
  right: `${prefix}-right`,
  left: `${prefix}-left`,
};

const Drawer: React.FC<DrawerProps> = ({
  visible,
  mask = true,
  title,
  onClose,
  maskClosable = true,
  children,
  placement = 'right',
  style,
  width,
  titleStyle,
  bodyStyle,
  ...rest
}) => {
  useEffect(() => {
    visible && cancelScroll();
    !visible && enableScroll();
  }, [visible]);

  // 点击遮罩
  const handleMaskClicked = (e: React.MouseEvent) => {
    maskClosable && handleClose(e);
  };
  // 关闭
  const handleClose = (e: React.MouseEvent) => {
    onClose?.(e);
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
  const classes = classNames(`${prefix}`, placements[placement], {
    [`${prefix}-visible`]: visible,
  });
  return (
    <>
      <div className={classes} style={{ ...style, width }} {...rest}>
        <div className={`${prefix}-title-container`}>
          <Close className={`${prefix}-close-icon`} onClick={handleClose}></Close>
          <div className={`${prefix}-title`} style={titleStyle}>
            {title}
          </div>
        </div>
        <div className={`${prefix}-body`} style={bodyStyle}>
          {children}
        </div>
      </div>
      {visible && mask && (
        <div className={`${prefix}-mask`} onClick={(e) => handleMaskClicked(e)}></div>
      )}
    </>
  );
};

Drawer.propTypes = {
  mask: PropTypes.bool,
  title: PropTypes.node,
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  maskClosable: PropTypes.bool,
  placement: PropTypes.oneOf(['right', 'left']),
  style: PropTypes.object,
  titleStyle: PropTypes.object,
  bodyStyle: PropTypes.object,
  width: PropTypes.number,
};

export default Drawer;
