# Neon-Design

<div align="center" height="160">
  <img  style="height:160px;width:160px;" height="160" width="160" src="https://tva1.sinaimg.cn/large/006wJXbzgy1gzfgthghjmj30e80e8gpf.jpg" />
</div>

<div align="center">
    <img src="https://img.shields.io/npm/v/neon-design?style=for-the-badge" alt="npm-version" />
    <img src="https://img.shields.io/npm/l/neon-design?style=for-the-badge" alt="license" />
</div>

> detail:[详细信息](https://ui.xaneon.com)


## Quick start

1. run `npm i neon-design` to install 

   ```
   npm i neon-design
   ```

2. import into project

    ```tsx
    import { Button } from 'neon-design'
    ```

3. use babel-plugin-import to import components and style on demand 

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
    
    