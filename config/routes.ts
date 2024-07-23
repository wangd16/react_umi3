const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: '@/pages/Login' },
  { path: '/register', component: '@/pages/Register' },
  { path: '404', component: '@/pages/404' },
];

export default routes;
