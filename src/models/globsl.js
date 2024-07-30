// 全局共用性的状态

import { request } from 'umi';

export default {
  namespace: 'global', // 所有models里面的namespace不能重名，可以不写则是文件名
  state: {
    title: '全局title',
    text: '全局text',
    login: false,
  },
  // 处理同步业务
  reducers: {
    // 内部自己修改
    setText(state) {
      return {
        ...state,
        text: '全局设置后的text' + Math.random().toFixed(2),
      };
    },
    // 接收外部传入的参数
    setTitle(state, action) {
      console.log('🚀WYD-dev 🚝 setTitle 🚝 action:', action);
      return {
        ...state,
        title: `全局设置后的title ${action.payload.a}/${action.payload.b}`,
      };
    },
    // 登录
    singin: (state, { payload }) => {
      console.log('🚀WYD-dev 🚝 action:', payload);
      return {
        ...state,
        login: true,
      };
    },
  },
  // 处理异步函数
  effects: {
    // 处理登录
    *login(action, { call, put, select }) {
      const data = yield call(request, '/umi/login', {
        method: 'POST',
        data: {
          username: action.payload.username,
          password: action.payload.password,
        },
      });
      yield put({
        type: 'singin',
        payload: data,
      });
    },
  },
};
