---
title: Message 消息提示
group:
  title: 反馈
  order: 30
---

# Message  消息提示



## 代码演示

<code src="./demo/basic"></code>

## API

Message组件使用方式如下：

Message.info( content  [,config] )



| 参数    | 说明         | 类型   | 默认值 |
| ------- | ------------ | ------ | ------ |
| content | 提示文本内容 | string | -      |

config对象可选属性如下：


| 属性      | 说明       | 类型          | 默认值 |
| --------- | ---------- | ------------- | ------ |
| closeable | 是否可以手动关闭 | boolean | false |
| duration | 自动关闭延迟时间,单位为`s` | number | 3 |
| onClose | 关闭后的回调              | function | - |

