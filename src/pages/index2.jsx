import React, { useState, useEffect, useRef } from 'react';
import { request, useRequest } from 'umi';

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

  // umi mock
  // const { data, error, loading } = useRequest('/umi/goods');

  // 线上接口
  // const { data, error, loading } = useRequest('/book/57206c3539a913ad65d35c7b');

  // 手动触发 useRequest 操作
  // const { data, error, loading, run } = useRequest({
  //     url: '/umi/login',
  //     method: 'POST',
  //     data: {
  //         username: 'admin',
  //         password: '123456'
  //     }
  // }, {
  //     manual: true,// 手动通过运行 run 触发
  // });

  // 轮询
  let count = 1;
  const { data, error, loading, run, mutate } = useRequest(
    {
      url: '/umi/list',
      method: 'GET',
      params: { _limit: count + 1 },
    },
    {
      pollingInterval: 1000, // 轮询 一秒读一次
      pollingWhenHidden: false, // 屏幕不可见时，站厅轮询
      manual: true, // 手动通过运行 run 触发
    },
  );

  function handlerRun() {
    run();
  }

  if (error) {
    return <div>错误信息</div>;
  }
  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>Page Index</h1>
    </div>
  );
}

export default PageIndex;
