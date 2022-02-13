import React, { useState, useEffect } from 'react';
import { Spin } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '20px 120px',
      }}
    >
      <Spin spinning size="sm" type="expand"></Spin>
      <Spin spinning type="expand"></Spin>
      <Spin spinning size="lg" type="expand"></Spin>
    </div>
  );
};
