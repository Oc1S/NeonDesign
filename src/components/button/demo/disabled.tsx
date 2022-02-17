import React from 'react';
import { Button } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <>
    <Button
      onClick={() => {
        alert('HelloWorld');
      }}
    >
      Button With onClick
    </Button>
    <Button
      disabled
      onClick={() => {
        alert('HelloWorld');
      }}
    >
      Button With onClick(disabled)
    </Button>
    <br />
    <Button href="http://www.google.com" target="_blank">
      Button With href
    </Button>
    <Button disabled>Button With href(disabled)</Button>
  </>
);
