---
title: Neon Design - 快速开始
sidemenu: false
---

<div align="center" height="160">
  <img  style="height:160px;width:160px;" height="160" width="160" src="https://tva1.sinaimg.cn/large/006wJXbzgy1gzfgthghjmj30e80e8gpf.jpg" />
</div>

<div align="center">
    <img src="https://img.shields.io/npm/v/neon-design?style=for-the-badge" alt="npm-version" />
    <img src="https://img.shields.io/npm/l/neon-design?style=for-the-badge" alt="license" />
</div>

#### 从 npm 下载`neon-design`

```
npm i neon-design
```

#### 项目引入

```
import { Button } from 'neon-design';
```

#### 使用 babel-plugin-import 以引入样式和按需引入组件

```
npm i babel-plugin-import -D
```

`.babelrc.js`:

```
module.exports = {
  "plugins": [
    [
      "import",
      {
        "libraryName": "neon-design",
        "libraryDirectory": "lib/components",
        "style": "css",//"style":true if you're using less
      },
      "neon-design"
    ],
  ]
}
```
