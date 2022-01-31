---
title: Button 按钮
group:
  title: 基础组件
  order: 1
---

# Button 按钮

按钮 用于进行即时操作

## 代码演示

<code src="./demo/basic" ></code>

<code src="./demo/disabled" ></code>

<code src="./demo/shape" ></code>

## API

通过设置 Button 的属性来产生不同的按钮样式。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |
| square | 设置方角按钮 | boolean                        | false    |
| block | 将按钮宽度调整为其父宽度 | boolean | false |
| disabled | 设置按钮失效 | boolean | false |
| onClick | 点击按钮时的回调 | (event) => void | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |

支持原生 button 的其他所有属性。
