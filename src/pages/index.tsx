import user from '../assets/images/headimg.jpg';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
      <img src={user} alt="头像" />
      {/* 按需加载 */}
      <img src={require('../assets/images/headimg.jpg')} alt="头像" />

      {/* 指向临时的public目录 */}
      <img src="/img/微信图片_20240716101124.jpg" alt="头像" />

      <h2>全局变量</h2>
      <div className="myLink"> 测试</div>

      <h2>混合</h2>
      <div id={styles.a1}>测试1</div>
      <div className={styles.a2}>测试2</div>

      {/* 不让其自动添加hash值 */}
      <div className={`a2`}>值</div>
    </div>
  );
}
