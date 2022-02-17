import React from 'react';
import { Alert } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../message/style';

export default () => {
  return (
    <>
      <Alert closeable duration={2}>
        <div>Alert Message 1</div>
        <div>Alert Message 2</div>
        <div>Alert Message 3</div>
      </Alert>
      <Alert closeable type="dark">
        <>
          <div>Alert Message 1</div>
          <div>Alert Message 2</div>
          <div>Alert Message 3</div>
        </>
      </Alert>
    </>
  );
};
