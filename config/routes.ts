const routes = [
  {
    path: '/',
    component: '@/Layouts/base-layouts',
    routes: [
      { path: '/login', component: '@/pages/Login' },
      { path: '/register', component: '@/pages/Register' },
      {
        path: '/goods',
        component: '@/Layouts/aside-layouts',
        wrappers: ['@/wrappers/auth'],
        routes: [
          { path: '/goods', component: '@/pages/Goods' },
          { path: '/goods/:id', component: '@/pages/Goods/Detail' },
          { path: '/goods/:id/comment', component: '@/pages/Goods/Comment' },
        ],
      },
      { path: '/', redirect: '/Login' },
      { path: '404', component: '@/pages/404' },
    ],
  },
  { path: '/', redirect: '/Login' },
  { path: '404', component: '@/pages/404' },
];

export default routes;
