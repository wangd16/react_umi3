import React, { useEffect } from 'react';
import { NavLink } from 'umi';
import styles from './index.less';

function Nav({}) {
  useEffect(() => {
    // Effect logic here
    return () => {
      // Cleanup logic here
    };
  }, []);

  return (
    <div className={styles.nav_content}>
      <NavLink to="/index" activeStyle={{ color: 'red' }}>
        首页
      </NavLink>
      <NavLink to="/goods" activeStyle={{ color: 'red' }}>
        商品
      </NavLink>
    </div>
  );
}

export default Nav;
