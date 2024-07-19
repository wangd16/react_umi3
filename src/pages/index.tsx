import { useState } from 'react';
import { Button } from 'antd';
import { Button as V2Button } from 'antd-mobile-v2'; //默认V2
import { Button as V5Button } from 'antd-mobile'; //默认V2
import styles from './index.less';

export default function IndexPage() {
  const [count, setCount] = useState(0);

  function handleAdd() {
    console.log('1');
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
      <div>{count}</div>
      <Button type="primary" onClick={handleAdd}>
        +
      </Button>
      <V2Button type="primary" size="small">
        v2
      </V2Button>
      <V5Button color="primary" size="small">
        v2
      </V5Button>
    </div>
  );
}
