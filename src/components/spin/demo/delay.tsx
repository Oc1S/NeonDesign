import React, { useState, useEffect } from 'react';
import { Switch, Spin } from 'neon-ui';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../switch/style';

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [checked, setChecked] = useState(true);

  const handleClick = () => {
    setChecked(!checked);
    setIsLoading(!checked);
  };
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ height: 100 }}>
          <Spin spinning={isLoading} type={'chase'} delay={800}>
            <span style={{ color: '#fff' }}>Loading...</span>
          </Spin>
        </div>
        <Switch onClick={handleClick} checked={checked}>
          Toggle Spinning icon
        </Switch>
      </div>
    </>
  );
};
