import React from 'react';
import { connect } from 'dva';

function Dev(props) {
  const { global, dispatch } = props;
  console.log('🚀WYD-dev 🚝 Dev 🚝 props:', props);
  console.log('🚀WYD-dev 🚝 Dev 🚝 a:', global);

  function handleLogin() {
    dispatch({
      type: 'global/singin',
    });
  }

  function handleUpdate() {
    dispatch({
      type: 'global/setText',
    });
  }

  function handleTransfer() {
    dispatch({
      type: 'global/setTitle',
      payload: {
        a: '传递 的值',
        b: '555~~~',
      },
    });
  }

  return (
    <div>
      <h2>pages Dev</h2>
      <hr />
      <h3>获取全局state</h3>
      <div>不穿参修改text:{global.text}</div>
      <div>传参修改title:{global.title}</div>
      {global.login ? <>已登陆</> : <>未登录</>}
      <hr />
      <button onClick={handleUpdate}>修改全局状态值，不传参</button>
      <br />
      <button onClick={handleTransfer}>修改全局状态值，传参</button>
      <br />
      <button onClick={handleLogin}>登录</button>
    </div>
  );
}
// 全局 级别的数据抓取
// export default connect(({ global) => ({ global}))(Dev);

// 页面及子模块 级别的数据抓取
export default connect(({ global, dev, a, b }) => ({ global, dev, a, b }))(Dev);

// ! 同时访问两个dva文件数据,通过对两个文件的namespace命名获取
// export default connect(({ global,dev }) => ({ global,dev }))(Dev);
