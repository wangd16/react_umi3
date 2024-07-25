import React from 'react';

function PageIndex() {
  async function getGoods() {
    const res = await fetch('/umi/goods');
    const data = await res.json();
    console.log('🚀WYD-dev 🚝 getGoods 🚝 data:', data);
  }

  async function handlerLogin() {
    const res = await fetch('/umi/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: 'username=admin&password=123456',
    });
    const data = await res.json();
    console.log('🚀WYD-dev 🚝 handlerLogin 🚝 data:', data);
  }

  return (
    <div>
      <h3>Page Index</h3>
      <h4>fetch</h4>
      <button onClick={getGoods}>获取goods数据</button>
      <button onClick={handlerLogin}>登录</button>
    </div>
  );
}

export default PageIndex;
