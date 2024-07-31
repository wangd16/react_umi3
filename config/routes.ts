// 多级路由配置及路由传参
// const routes = [
//   {
//     path: '/',
//     component: '@/Layouts/base-layouts',
//     routes: [
//       { path: '/login', component: '@/pages/Login' },
//       { path: '/register', component: '@/pages/Register' },
//       {
//         path: '/goods',
//         component: '@/Layouts/aside-layouts',
//         wrappers: ['@/wrappers/auth'],
//         routes: [
//           { path: '/goods', component: '@/pages/Goods' },
//           { path: '/goods/:id', component: '@/pages/Goods/Detail' },
//           { path: '/goods/:id/comment', component: '@/pages/Goods/Comment' },
//         ],
//       },
//       { path: '/', redirect: '/Login' },
//       { path: '404', component: '@/pages/404' },
//     ],
//   },
//   { path: '/', redirect: '/Login' },
//   { path: '404', component: '@/pages/404' },
// ];

// 页面请求的路由
// const routes1 = [{ path: '/', component: '@/pages/index.jsx' }];

// dva 全局及数据及页面级数据获取路由
// const routes = [
//   {
//     path: '/',
//     component: '@/Layouts/base-layouts',
//     routes: [
//       { path: '/', component: '@/pages/index.jsx' },
//       { path: '/dev', component: '@/pages/Dev' },
//       { path: '/goods', component: '@/pages/Goods' },
//     ],
//   },
// ];

const routes = [
  { path: '/', component: '@/pages/index' },
  { path: '/login', component: '@/pages/Login' },
];

export default routes;
