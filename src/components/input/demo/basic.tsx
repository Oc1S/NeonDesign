import React, { useState } from 'react';
import { Input } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';

export default () => {
  const [inputValue, setInputValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('@change', e.target.value);
  };
  return (
    <>
      <Input onChange={onChange} placeholder="HI" clearable style={{ width: 200 }}></Input>
      <Input defaultValue="HELLO WORLD" onChange={onChange}></Input>
    </>
  );
};
