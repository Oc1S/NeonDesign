import React from 'react';
import { Button } from 'neon-ui';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <Button>Middle Button !</Button>
    <Button size="small">Small Button !</Button>
    <Button size="large">Large Button !</Button>
  </>
);
