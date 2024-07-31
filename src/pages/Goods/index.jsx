import React from 'react';
import { connect } from 'umi';
import Menu from '@/components/Menu';
import styles from './index.less';

function Goods(props) {
  const { global } = props;

  return (
    <div>
      <h3>pages Goods</h3>
      <div>获取公共状态的title：{global.title}</div>
      <div className={styles.layout2_warp}>
        <div className={styles.layout2_nav}>
          <Menu />
        </div>
        <div className={styles.layout2_content}>{props.children}</div>
      </div>
    </div>
  );
}

export default connect(({ global }) => ({ global }))(Goods);
