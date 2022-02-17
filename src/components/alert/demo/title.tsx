import React from 'react';
import { Alert } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../message/style';

export default () => {
  return (
    <>
      <Alert title="There's an Alert below">Here I am!</Alert>
    </>
  );
};
