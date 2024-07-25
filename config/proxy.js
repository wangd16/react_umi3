export default {
  '/api': {
    // 代理的真实服务器地址
    target: 'https://localhost:9001',
    // 配置这个可以从 http 代理到https
    https: true,
    // 依赖 origin 的功能需要使用如下配置，比如 cookie
    changeOrigin: true,
    // 路径替换
    pathRewrite: { '^/api': '' },
  },
  '/book': {
    target: 'https://api.zhuishushenqi.com',
    changeOrigin: true,
  },
};
