import React, { useState } from 'react';
import { Button, Modal } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import
import '../../button/style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const handleClick = () => {
    setIsModalShow(true);
  };
  const handleOk = () => {
    setIsModalShow(false);
  };
  const handleCancel = () => {
    setIsModalShow(false);
  };

  const title = <span>This is title</span>;

  return (
    <>
      <Button onClick={handleClick}>Click to see default Modal !</Button>
      <Modal visible={isModalShow} onOk={handleOk} onCancel={handleCancel} title={title}>
        Hello World!
      </Modal>
    </>
  );
};
