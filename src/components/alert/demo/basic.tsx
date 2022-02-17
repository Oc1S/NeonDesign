import React from 'react';
import { Alert } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../message/style';

export default () => {
  return (
    <>
      <Alert>Default Alert !</Alert>
      <Alert type="dark">Dark Alert !</Alert>
    </>
  );
};
