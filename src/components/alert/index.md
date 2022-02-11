---
title: Alert 警告提示
group:
  title: 展示
  order: 40
---


# Alert  警告提示

警告提示，展现需要关注的信息。

## 代码演示

### 用法

<code src="./demo/basic.tsx" title="类型" desc="通过type属性设置类型"></code>

<code src="./demo/title.tsx" title="标题" desc="通过title属性添加标题"></code>

<code src="./demo/closeable.tsx" title="关闭" desc="添加closeable属性添加关闭功能，提供onClose回调"></code>

<code src="./demo/slide.tsx" title="自动轮播" desc="多个子节点自动轮播，若不需要轮播可将children包裹在一个标签内（包括空标签）"></code>

<code src="./demo/marquee.tsx" title="滚动播放" desc="配合react-fast-marquee可实现滚动播放"></code>

## API

| 参数         | 说明             | 类型                | 默认值    |
| :----------- | :--------------- | :------------------ | :-------- |
| type         | 样式种类         | `default` \| `dark` | `default` |
| title        | 公告标题         | string              | -         |
| duration     | 自动轮播时间间隔 | number              | 5         |
| closeable    | 是否可关闭       | boolean             | false     |
| onClose      | 关闭后的回调     | funtion(e)          | -         |
| className    | 类名             | string              | -         |
| titleStyle   | 标题样式         | CSSProperties       | -         |
| contentStyle | 内容样式         | CSSProperties       | -         |
