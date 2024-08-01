export default {
  // 判断是否登录
  'GET /umi/auth': (req, res) => {
    res.send({
      isLogin: true,
    });
  },
  // 支持值为Object 和 Array
  'POST /umi/login': (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'admin',
      });
    } else if (username === 'user123' && password === '123456') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'user',
      });
    } else {
      res.send({
        err: 1,
        msg: '失败',
      });
    }
  },
  //动态获取路由
  'GET /umi/menus': (req, res) => {
    res.send([
      {
        path: '/',
        component: 'Layouts/base-layouts',
        routes: [
          { path: '/', redirect: 'index' },
          { path: '/index', title: '首页', component: 'pages' },
          {
            path: '/goods',
            title: '商品',
            component: 'pages/Goods',
            routes: [
              // { path: '/goods', component: 'pages/Goods' },
              {
                path: '/goods/:id?',
                title: '具体商品',
                component: 'pages/Goods/Detail',
              },
              { path: '/goods/:id/comment', component: 'pages/Goods/Comment' },
              {
                path: '/goods/:id/comment/:cid',
                component: 'pages/Goods/Comment/Detail',
              },
              { component: 'pages/404' },
            ],
          },
          { component: 'pages/404' },
        ],
      },
    ]);
  },
};
