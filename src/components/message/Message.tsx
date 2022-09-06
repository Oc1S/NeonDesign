import React from 'react';
import classNames from 'classnames';

const prefix = 'neon-message';

export type MessageType = {
  content: string;
  type: string;
  id: string;
};

export interface MessageProps {
  content: string;
  type: string;
  id: string;
  removeById: (id: string) => any;
  closeable?: boolean;
  duration?: number;
  onClose?: (...args: any) => any;
}

const Message: React.FC<MessageProps> = ({
  content,
  // type, //waitForType
  removeById,
  id,
  closeable,
  onClose,
  duration,
}) => {
  let animationDuration = '3s';
  if (duration) {
    animationDuration = `${duration}s`;
  }

  const handleRemove = () => {
    onClose?.();
    removeById(id);
  };

  const classes = classNames(`${prefix}`);
  return (
    <div className={classes} onAnimationEnd={handleRemove} style={{ animationDuration }}>
      <span>{content}</span>
      {closeable && (
        <span onClick={handleRemove} className={`${prefix}-icon-close`}>
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
      )}
    </div>
  );
};

export default Message;
