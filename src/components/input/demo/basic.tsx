import React, { useState, useEffect } from 'react';
import { Input } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';

export default () => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => {
    console.log(e);
  };
  return (
    <>
      <Input /* defaultValue="HELLO WORLD" */ onChange={onChange} placeholder="HI"></Input>
      <Input defaultValue="HELLO WORLD" onChange={onChange}></Input>
    </>
  );
};
