import React from 'react';
import ReactDOM from 'react-dom';
import MessageWrapper, { MessageConfig } from './MessageWrapper';
import { nanoid } from 'nanoid';

export const Message = (function initMessageWrapper() {
  let container = document.getElementById('neon-message-wrapper');
  if (!container) {
    container = document.createElement('div');
    container.id = 'neon-message-wrapper';
    document.body.append(container);
  }
  const messageWrapper: any = ReactDOM.render(<MessageWrapper />, container);

  return {
    info: (content: string, config?: MessageConfig) => {
      messageWrapper.add(
        {
          id: nanoid(),
          content,
          type: 'info',
        },
        config,
      );
    },
  };
})();

export default Message;
