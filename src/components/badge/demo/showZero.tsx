import React from 'react';
import { Avatar, Badge } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';

export default () => {
  return (
    <>
      <Badge pointer count={0}>
        <Avatar
          src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
          shape="square"
        ></Avatar>
      </Badge>
      <Badge pointer count={0} showZero>
        <Avatar
          src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
          shape="square"
        ></Avatar>
      </Badge>
    </>
  );
};
