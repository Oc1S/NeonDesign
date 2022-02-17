import React from 'react';
import { Avatar } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <div>
      <Avatar
        size="sm"
        shape="square"
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
      <Avatar
        shape="square"
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
      <Avatar
        size="lg"
        shape="square"
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
    </div>

    <div>
      <Avatar
        size="sm"
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
      <Avatar src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"></Avatar>
      <Avatar
        size="lg"
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
    </div>
  </>
);
