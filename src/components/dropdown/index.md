---
title: Affix 固钉
group:
  title: 布局
---

# Affix 固钉

将元素固定在可视范围

## 代码演示

<code src="./demo/basic" ></code>

## API

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - |
| offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | 0 |
| target | 设置 `Affix` 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | () => HTMLElement | () => window |
| onChange | 固定状态改变时触发的回调函数 | (affixed?: boolean) => void | - |

`Affix` 内的元素不应使用绝对定位，需要应设置 `Affix` 为绝对定位：
