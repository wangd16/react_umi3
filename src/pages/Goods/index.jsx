import React from 'react';
import { connect } from 'umi';

function Goods(props) {
  const { global } = props;
  return (
    <div>
      <h3>pages Goods</h3>
      <div>获取公共状态的title：{global.title}</div>
    </div>
  );
}

export default connect(({ global }) => ({ global }))(Goods);
