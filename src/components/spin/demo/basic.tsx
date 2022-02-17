import React, { useState } from 'react';
import { Button, Spin } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

export default () => {
  const [typeNum, setTypeNum] = useState(0);

  const typeMap = ['circle', 'expand', 'chase', 'fadingCircle', 'foldingCube'];

  const toggle = () => {
    typeNum === 4 ? setTypeNum(0) : setTypeNum(typeNum + 1);
  };
  return (
    <>
      <div>
        <Button onClick={toggle}>Toggle Spinning icon</Button>
      </div>
      <div>
        <Spin spinning type={typeMap[typeNum]}>
          <span style={{ color: '#fff' }}>Loading...</span>
        </Spin>
      </div>
    </>
  );
};
