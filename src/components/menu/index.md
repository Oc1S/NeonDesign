---
title: Menu 导航菜单
group:
  title: 导航
  order: 20
---

# Menu 导航菜单

为页面和功能提供导航

## 代码演示

<code src="./demo/basic" ></code>

<code src="./demo/vertical" ></code>

## API

| 参数          | 说明                     | 类型                       | 默认值     |
| :------------ | :----------------------- | :------------------------- | :--------- |
| mode          | 菜单类型，分为垂直、水平 | `vertical` \| `horizontal` | `vertical` |
| selectedIndex | 当前选中的菜单项 index   | string                     | -          |
| style         | 根节点样式               | CSSProperties              | -          |
| onClick       | 点击 MenuItem 调用此函数 | function(domEvent)         | -          |
