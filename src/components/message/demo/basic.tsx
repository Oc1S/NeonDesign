import React, { useState } from 'react';
import { Button, Message } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

export default () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const showMessage = () => {
    Message.info('HelloWorld', {
      closeable: true,
      onClose: handleClose,
      duration: 3,
    });
  };
  const handleClose = () => {
    setButtonDisabled(true);
    setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);
  };
  return (
    <>
      <Button onClick={showMessage} disabled={buttonDisabled}>
        Show Message
      </Button>
    </>
  );
};
