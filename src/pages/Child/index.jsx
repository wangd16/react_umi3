import { memo } from 'react';

function Child(props) {
  const show = () => console.log('child组件渲染');

  const { updateCount } = props;
  return (
    <div>
      Child组件
      <div>{show()}</div>
      {/* <div>{count}</div> */}
      <button onClick={updateCount}>触发父业务函数</button>
    </div>
  );
}

export default memo(Child);
