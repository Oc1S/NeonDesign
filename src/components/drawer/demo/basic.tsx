import React, { useState, useEffect } from 'react';
import { Drawer, Button, Switch } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';
import '../../switch/style';

export default () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [placement, setPlacement] = useState('right');

  useEffect(() => {
    checked && setPlacement('left');
    !checked && setPlacement('right');
  }, [checked]);

  const handleClose = (e: React.MouseEvent) => {
    setIsDrawerVisible(false);
  };
  const title = <h3>I'm Title</h3>;
  return (
    <>
      <Button onClick={() => setIsDrawerVisible(true)}>Show Drawer</Button>
      <div>
        Go Left <br />
        <Switch checked={checked} onClick={() => setChecked(!checked)}></Switch>
      </div>

      <Drawer visible={isDrawerVisible} title={title} onClose={handleClose} placement={placement}>
        HELLO WORLD !
      </Drawer>
    </>
  );
};
