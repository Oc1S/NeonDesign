import React from 'react';
import Message, { MessageType } from './Message';
import { nanoid } from 'nanoid';

const prefix = 'neon-message-wrapper';

export interface MessageWrapperProps {}

export interface MessageWrapperState {
  messageList: MessageType[];
}

export type MessageConfig = {
  closeable?: boolean;
  duration?: number;
  onClose?: (...args: any) => any;
};

class MessageWrapper extends React.Component<MessageWrapperProps, MessageWrapperState> {
  readonly state: Readonly<MessageWrapperState> = {
    messageList: [],
  };

  add = (
    msg: MessageType = { content: '', type: 'info', id: nanoid() },
    config?: MessageConfig,
  ) => {
    const { messageList } = this.state;
    this.setState({
      messageList: [...messageList, { ...msg, ...config }],
    });
  };

  removeById = (id: string) => {
    const { messageList } = this.state;
    const newMessageList = messageList.filter((msg) => msg.id !== id);
    this.setState({
      messageList: newMessageList,
    });
  };
  render(): React.ReactNode {
    const { messageList } = this.state;
    return (
      <div className={`${prefix}`}>
        {messageList.map((message) => (
          <Message {...message} removeById={this.removeById} key={message.id} />
        ))}
      </div>
    );
  }
}

export default MessageWrapper;
