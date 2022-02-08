---
title: Modal 对话框
group:
  title: 反馈
  order: 30
---

# Modal 对话框

模态对话框。需要用户处理事务，又不希望跳转页面以致打断工作流程时，可以使用 Modal 在当前页面正中打开一个浮层，承载相应的操作。

## 代码演示

<code src="./demo/basic" ></code>

<code src="./demo/custom" ></code>

## API

| 属性           | 说明                                 | 类型           | 默认值  |
| -------------- | ------------------------------------ | -------------- | ------- |
| visible        | 对话框是否可见                       | boolean        | `必填`  |
| title          | 标题                                 | ReactNode      | -       |
| okText         | 确认按钮文字                         | ReactNode      | `确定`  |
| cancelText     | 取消按钮文字                         | ReactNode      | `取消`  |
| width          | 宽度                                 | string\|number | `30rem` |
| zIndex         | 设置 Modal 的 z-index                | number         | 1000    |
| modalClassName | 对话框容器的类名                     | string         | -       |
| modalStyle     | 对话框容器样式                       | CSSProperties  | -       |
| titleClassName | 对话框标题的类名                     | string         | -       |
| titleStyle     | 对话框标题样式                       | CSSProperties  | -       |
| bodyClassName  | 对话框主体内容类名                   | string         | -       |
| bodyStyle      | 对话框主体内容样式                   | CSSProperties  | -       |
| mask           | 是否展示遮罩                         | boolean        | true    |
| maskClosable   | 点击遮罩是否关闭 modal               | boolean        | true    |
| maskStyle      | 遮罩样式                             | CSSProperties  | -       |
| maskClassName  | 遮罩类名                             | string         | -       |
| onOk           | 点击确定回调                         | function(e)    | -       |
| onCancel       | 点击取消按钮、遮罩层或右上角叉的回调 | function(e)    | -       |
| afterClose     | Modal 关闭的回调                     | function       | -       |
| destroyOnClose | 是否关闭时销毁 dom                   | boolean        | false   |
| noFooter       | 是否取消底部按钮                     | boolean        | false   |
