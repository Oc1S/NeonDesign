---
title: Avatar 头像
group:
  title: 展示
  order: 40
---

# Avatar  头像



## 代码演示

<code src="./demo/basic" ></code>

## API

| 属性      | 说明       | 类型          | 默认值 |
| --------- | ---------- | ------------- | ------ |
| children | 轮播图内容 | ReactNode | - |
| className | 轮播图类名 |        string       | - |
| style     | 轮播图样式 | CSSProperties | - |
| width | 宽度 | number | 640 |
| height | 高度 | number | 320 |
| duration | 切换过渡时间 | string | `0.7s` |
| autoplay | 是否自动播放 | boolean | false |
| interval | 自动播放间隔，单位`ms` | number | 3000 |
| keepAlive | 自动播放时切换标签页是否继续播放 | boolean | false |
| dotType | 面板指示点类型 | `rectangle` \| `circle` | `rectangle` |
