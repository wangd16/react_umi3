├─ mock // mock 文件所在目录，基于express
├─ src  // 源码目录
    ├─ layouts/index.js  // 全局布局
    ├─ models  // 数据流
    ├─ pages  // 页面目录，里面的文件即路由
    ├─ wrappers  // 权限管理
    ├─ app.js  // 运行时配置文件
    ├─ global.js // 可以在这里加入 polyfill
    ├─ global.scss // 约定的全局样式文件，自动引入
├─ .umirc.ts  // umi 配置，同config/config.js  二选一
├─ dist // 默认的build输出目录
├─ public // 变通的数据资源目录喝一些无需打包的资源
├─ .env // 环境变量