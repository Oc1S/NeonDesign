import React from 'react';
import { Button } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <Button>Button !</Button>
    <br />
    <Button square>Square Button !</Button>
    <br />
    <Button block>Block Button !</Button>
  </>
);
