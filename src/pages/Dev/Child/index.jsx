import React from 'react';
import { useDispatch, useSelector } from 'umi';

function Child() {
  const dispatch = useDispatch();
  // const { dev } = useSelector((state) => (state));
  // const dev = useSelector((state) => (state.dev));
  const { dev } = useSelector((state) => ({ dev: state.dev }));
  console.log('🚀WYD-dev 🚝 Child 🚝 useSelector:', dev);

  // 修改dev的modal
  function handleUpdateTitle() {
    dispatch({
      type: 'dev/setTitle',
      payload: {
        a: 1,
        b: 2,
      },
    });
  }

  return (
    <div>
      <h3>Child page</h3>
      <div>{dev.title}</div>
      <button onClick={handleUpdateTitle}>修改dev的model</button>
    </div>
  );
}

export default Child;
