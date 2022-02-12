---
title: Drawer 抽屉
group:
  title: 反馈
  order: 30
---

# Drawer 抽屉

屏幕边缘滑出的浮层面板。

## 代码演示

<code src="./demo/basic" ></code>

## API

Drawer的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| visible | 是否显示，`必填` | boolean | false |
| onClose | 关闭操作的回调，`必填` | function(e) | - |
| placement | 弹出位置 | `right` \| `left` | `right` |
| width | 宽度 | number |480|
| title | 标题 | string | - |
| mask | 是否有遮罩层 | boolean | false |
| maskClosable | 点击遮罩层是否可关闭 | boolean | false |
| style | drawer样式 | CSSProperties | - |
| titleStyle | 标题样式 |  CSSProperties |-|
| bodyStyle | 标题样式 | CSSProperties |-|
