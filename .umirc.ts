import { defineConfig } from 'dumi';

let base = '/NeonDesign';
let publicPath = '/NeonDesign/';

/* let base = undefined;
let publicPath = undefined; */

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

const logo = 'https://tva1.sinaimg.cn/large/006wJXbzgy1gzfgthghjmj30e80e8gpf.jpg';

export default defineConfig({
  title: 'Neon Design', // 站点名称
  mode: 'site',
  logo: '/images/logo.png',
  favicon: '/favicon.ico',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '快速开始',
      path: '/guide/quick-start',
    },
    {
      title: '组件',
      path: '/components',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/Oc1S/NeonDesign',
    },
  ],
  base,
  publicPath,
});
