import React from 'react';
import { Alert } from 'neon-design';
import Marquee from 'react-fast-marquee';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../message/style';

export default () => {
  return (
    <>
      <Alert closeable type="dark">
        <Marquee pauseOnHover gradient={false}>
          通过使用react-fast-marquee可以实现消息内容滚动播放功能。
        </Marquee>
      </Alert>
    </>
  );
};
