import React, { useState } from 'react';
import { Button, Spin, SpinType } from 'neon-design';
/* 实际使用时可全局引入样式或使用babel-plugin-import */
import '../style';
import '../../button/style';

// const { TypeEnums } = Button;

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
        <Spin spinning type={typeMap[typeNum] as SpinType}>
          <span style={{ color: '#fff' }}>Loading...</span>
        </Spin>
      </div>
    </>
  );
};
