---
title: Spin 加载中
group:
  title: 反馈
  order: 30
---

# Spin  加载中

用于页面和区块的加载中状态。



## 代码演示

<code src="./demo/basic" background="#333"  desc="多种类型，通过type属性设置"></code>

<code src="./demo/size"  background="#333" desc="多种大小，通过size属性设置"></code>

<code src="./demo/delay"  background="#333" desc="设置delay，可设置延迟渲染时间，防止闪烁"></code>



## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| spinning | 是否渲染，`必填` | boolean | false |
| type | 加载图标类型 | `circle` \| `expand` \| `chase` \| `fadingCircle` \| `foldingCube` | `circle` |
| children | 图标下方显示文字 | ReactNode | - |
| size | 图标大小 | `default` \| `sm` \| `lg` | `default` |
| color | 图标颜色 | string | `#fff` |
| delay | 延迟渲染时间，防止闪烁 | number | 0 |
