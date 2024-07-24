import React from 'react';
import Menu from '@/components/Menu';
import styles from './index.less';

function AsideLayouts(props) {
  return (
    <div className={styles.layout2_warp}>
      <div className={styles.layout2_nav}>
        <Menu />
      </div>
      <div className={styles.layout2_content}>{props.children}</div>
    </div>
  );
}

export default AsideLayouts;
