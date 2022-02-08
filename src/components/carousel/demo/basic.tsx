import React from 'react';
import { Carousel } from 'neon-ui';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => (
  <Carousel autoplay dotType="rectangle">
    <div>
      <a href="https://xaneon.com" target="_blank">
        <img src="https://pic3.zhimg.com/v2-2eca64da78d43daca1e085c5a7688b3c_r.jpg" alt="" />
      </a>
    </div>
    <div>
      <img
        src="https://steamuserimages-a.akamaihd.net/ugc/1680367154048188887/8F87A876D756274B56E83EBDCC1C5885829F56C9/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt=""
      />
    </div>
    <div>
      <img
        src="https://i1.wp.com/image.gcores.com/6ccb0cbe-2c5b-40a4-be57-c3e33e598a14.jpg?ssl=1"
        alt=""
      />
    </div>
  </Carousel>
);
