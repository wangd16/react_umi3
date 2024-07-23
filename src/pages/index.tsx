import { useState, useMemo, useCallback } from 'react';
import AppContext from './Context';
import Child from './Child';
import styles from './index.less';

export default function IndexPage() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const updateCount = useCallback(() => console.log('父组件的业务'), [count]);

  return (
    <div>
      父组件
      {/* <div>getNum:{getNum()}</div> */}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={value} onChange={(ev) => setValue(ev.target.value)} />
      <Child updateCount={updateCount} />
    </div>
  );
}
