import React, { useState } from 'react';
import { Switch, Button } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

export default () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const [smChecked, setSmChecked] = useState(true);

  const handleClick = (e: React.MouseEvent) => {
    setChecked(!checked);
  };
  const handleSmClick = (e: React.MouseEvent) => {
    setSmChecked(!smChecked);
  };

  return (
    <>
      <div>
        <Switch checked={checked} disabled={disabled} onClick={handleClick}></Switch>
        <Switch checked={smChecked} size="sm" onClick={handleSmClick}></Switch>
      </div>
      <div>
        <Button onClick={() => setDisabled(!disabled)}>Toggle Disabled</Button>
      </div>
    </>
  );
};
