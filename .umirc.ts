import { defineConfig } from 'dumi';

let base = '/NeonUI';
let publicPath = '/NeonUI/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
  base = undefined;
  publicPath = undefined;
}

export default defineConfig({
  title: 'Neon UI', // 站点名称
  mode: 'site',
  outputPath: 'doc-site', // 输出文件夹
  exportStatic: {}, // 后续会部署到 github pages 直接全部生成静态页面 不走前端路由
  dynamicImport: {}, // 拆包 站点过大时可以优化首屏加载速度
  navs: [
    // null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '组件',
      path: '/components',
    },
  ],
  base,
  publicPath,
});
