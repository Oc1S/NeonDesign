import React, { useState } from 'react';
import { Button } from 'neon-ui';
import { Modal } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

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

  return (
    <>
      <Button onClick={handleClick}>Click to see custom Modal !</Button>
      <Modal
        visible={isModalShow}
        onOk={handleOk}
        onCancel={handleCancel}
        noFooter
        closeable={false}
        width="auto"
      >
        HelloWorld!
      </Modal>
    </>
  );
};
