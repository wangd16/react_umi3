import { defineConfig } from 'umi';
import routes from './routes.ts';
import theme from './theme.ts';

export default defineConfig({
  // node_modules 目录下依赖文件的编译方式
  nodeModulesTransform: {
    type: 'none', // all慢 兼容性好，node快 兼容性一般
  },
  routes: routes,
  // 快速刷新，可以保持组件状态，同时编辑提供调试，删除后可实现页面同步刷新
  // fastRefresh: {},
  devServer: {
    port: 8080, // .env 里面权限更高一些
    // https: true,// 启用https安全访问，于对应协议服务器通讯
  },
  title: 'UMI3',
  // 启用按需加载
  dynamicImport: {
    // 按需加载时指定加载的动画
    loading: '@/components/Loading',
  },
  mountElementId: 'app', // 指定 react app 渲染到的 HTML 元素 id

  // 修改Pc端主题配置
  theme,
});
