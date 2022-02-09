import React from 'react';
import { Avatar } from 'neon-ui';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <div>
      <Avatar
        size={40}
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
      <Avatar
        size={80}
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
      <Avatar
        size={160}
        src="https://pic1.zhimg.com/80/v2-f3f9f31f35a8b14b08b276581353852d_720w.jpg?source=1940ef5c"
      ></Avatar>
    </div>
  </>
);
