import React from 'react';
import { Alert, Message } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../message/style';

export default () => {
  const onClose = (e: React.MouseEvent) => {
    Message.info('The Alert has been Closed', { closeable: true });
    console.log(e);
  };
  return (
    <>
      <Alert closeable onClose={onClose}>
        I'm Alert!
      </Alert>

      <Alert title="There's an Alert below" closeable onClose={onClose}>
        Here I am!
      </Alert>
    </>
  );
};
