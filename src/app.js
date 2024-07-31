import { request, history } from 'umi';
export const render = async (oldRender) => {
  // 渲染前的权限校验，若未登录则只能访问登录页
  const { isLogin } = await request('/umi/auth');
  if (!isLogin) {
    history.push('/login');
  }
  oldRender();
};
