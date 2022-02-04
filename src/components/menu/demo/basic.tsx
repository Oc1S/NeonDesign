import React, { useState } from 'react';
import { Menu } from 'neon-ui';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => {
  return (
    <Menu selectedIndex={'1'}>
      <Menu.item nav="/components/menu" index="1">
        Navigation 1
      </Menu.item>
      <Menu.item nav="menu" index="2">
        Navigation 2
      </Menu.item>
      <Menu.SubMenu title="Sub Nav">
        <Menu.item index="3-1">SubMenu - Item 1</Menu.item>
        <Menu.item index="3-2">SubMenu - Item 2</Menu.item>
        <Menu.item disabled index="3-3">
          Disabled Item 3
        </Menu.item>
      </Menu.SubMenu>
      <Menu.item disabled index="4">
        Disabled Navigation
      </Menu.item>
    </Menu>
  );
};
