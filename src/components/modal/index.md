---
title: Modal 对话框
group:
  title: 反馈
  order: 1
---

# Modal 对话框

按钮 用于进行即时操作

## 代码演示

<code src="./demo/basic" ></code>

## API



| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| cancelText | 取消按钮文字 | ReactNode | `取消`afterClose |
| afterClose | Modal 完全关闭后的回调 | function | -    |
|mask|	是否展示遮罩|	boolean|	true|
|maskClosable	|点击蒙层是否允许关闭	|boolean	|true	|
|maskStyle	|遮罩样式	|CSSProperties	|-|
|okText|	确认按钮文字|	ReactNode|	确定|
|title	|标题|	ReactNode|	-	|
|visible	|对话框是否可见|	boolean|	-	|
|width|	宽度|	string | number|	520	|
|wrapClassName|	对话框外层容器的类名|	string|	-	|
|zIndex|	设置 Modal 的 z-index|	number	|1000	|
|onCancel	|点击遮罩层或右上角叉或取消按钮的回调|	function(e)|	-	|
|onOk	|点击确定回调	|function(e)|	-|