import React from 'react';
import { Divider } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <Divider></Divider>
    <Divider>Divider !</Divider>
    <Divider dashed>Dashed Divider !</Divider>
    <Divider plain>Plain Title !</Divider>
    <Divider orientation="left">Left Title !</Divider>
    <Divider orientation="right">Right Title !</Divider>
    <Divider orientation="left" orientationMargin="0">
      Left orientation with margin 0 !
    </Divider>
    <Divider orientation="right" orientationMargin={50}>
      Right orientation with margin !
    </Divider>

    <div style={{ display: 'flex', justifyContent: 'center', height: '20px' }}>
      HELLO
      <Divider vertical />
      WORLD
    </div>
  </>
);
