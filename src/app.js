import { request, history } from 'umi';

let routesData = []; //动态读取的路由

// 处理路由数据，更改数据格式
// 处理读到的路由数据
// 动态路由的`compnent`要的是一个组件不是一段地址，可通过require引入
// 动态路由读取后，跳转后不显示，需要关闭mfsu:{}
// 子路由不跳转，除了layout组件，其他需要添加exact，
// 数据数据里面不可以有require，数据需要过滤，require(非空字符拼接 + 变量)
// document.ejs报错，需要require拼接时找到index.jsx 目前umi3有这个问题;
const filterRoutes = (data) => {
  data.map((item) => {
    if (item.routes && item.routes.length > 0) {
      filterRoutes(item.routes);
    } else {
      item.exact = true;
    }
    if (!item.redirect) {
      if (item.component.includes('404')) {
        item.component = require('@/' + item.component + '.jsx').default;
      } else {
        item.component = require('@/' + item.component + '/index.jsx').default;
      }
      if (item.wrappers && item.wrappers.length > 0) {
        item.wrappers.map((str, index) => {
          item.wrappers[index] = request('@/' + str + '.jsx'.default);
        });
      }
    }
  });
};

// 动态添加路由
export function patchRoutes({ routes }) {
  console.log('🚀WYD-dev 🚝 pathRoutes 🚝 routes:', routes);

  // 添加一条
  // routes.push(
  //     {
  //         exact: true,//严格模式，决定子路由是否能够跳转
  //         component: require('@/pages/404').default
  //     }
  // );

  filterRoutes(routesData);
  console.log('🚀WYD-dev 🚝 patchRoutes 🚝 routesData:', routesData);
  // 添加多条
  routesData.forEach((item) => {
    routes.push(item);
  });
}

// 渲染前的操作
export const render = async (oldRender) => {
  // 渲染前的权限校验，若未登录则只能访问登录页
  const { isLogin } = await request('/umi/auth');
  if (!isLogin) {
    history.push('/login');
  } else {
    // 获取路由数据
    routesData = await request('/umi/menus');
  }
  oldRender();
};
