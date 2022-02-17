import React from 'react';
import { Menu } from 'neon-design';
import '../style'; //实际使用时可全局引入样式或使用babel-plugin-import

export default () => {
  return (
    <Menu selectedIndex={'1'} type="vertical">
      <Menu.item nav="/components/menu" index="1">
        Navigation 1
      </Menu.item>
      <Menu.SubMenu title="Vertical SubMenu">
        <Menu.item index="3-1">Navigation 3 - 1</Menu.item>
        <Menu.item index="3-2">Navigation 3 - 2</Menu.item>
      </Menu.SubMenu>
      <Menu.item nav="menu" index="2">
        Navigation 2
      </Menu.item>
    </Menu>
  );
};
