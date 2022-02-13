---
title: Input 输入框
group:
  title: 反馈
  order: 30
---

# Input  输入框

用于页面和区块的加载中状态。



## 代码演示

<code src="./demo/basic"  desc="多种类型，通过type属性设置"></code>



## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| value        | 输入框内容                   | string      | -      |
| onChange     | 输入框内容变化时的回调       | function(e) | -      |
| onPressEnter | 按下回车的回调               | function(e) | -      |
| addonBefore  | 带标签的 input，设置前置标签 | ReactNode   | -      |
| addonAfter   | 带标签的 input，设置后置标签 | ReactNode   | -      |
| bordered | 是否有边框                   | boolean     | true   |
| clearable    | 可以点击清除图标删除内容     | boolean     | -      |
| defaultValue | 输入框默认内容               | string      | -      |
| disabled     | 是否禁用状态，默认为 false   | boolean     | false  |
| maxLength    | 最大长度                     | number      | -      |
| id           | 输入框的 id                  | string      | -      |
