import React from 'react';
import { Input } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';

export default () => {
  return (
    <>
      <Input disabled defaultValue="Can't touch me"></Input>
    </>
  );
};
