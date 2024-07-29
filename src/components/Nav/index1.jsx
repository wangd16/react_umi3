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
      <NavLink to="/login" activeStyle={{ color: 'red' }}>
        dev
      </NavLink>
      <NavLink to="/register" activeStyle={{ color: 'red' }}>
        商品
      </NavLink>
    </div>
  );
}

export default Nav;
