import React from 'react';
import { request } from 'umi';

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

  async function requestGoods() {
    const data = await request('/umi/goods');
    console.log('🚀WYD-dev 🚝 requestGoods 🚝 data:', data);
  }

  async function requestLogin() {
    const data = await request('/umi/login', {
      method: 'POST',
      data: {
        username: 'admin',
        password: '123456',
      },
    });
    console.log('🚀WYD-dev 🚝 requestLogin 🚝 data:', data);
  }

  return (
    <div>
      <h3>Page Index</h3>
      <h4>fetch</h4>
      <button onClick={getGoods}>获取goods数据</button>
      <button onClick={handlerLogin}>登录</button>

      <h4>request</h4>
      <button onClick={requestGoods}>获取goods数据</button>
      <button onClick={requestLogin}>登录</button>
    </div>
  );
}

export default PageIndex;
