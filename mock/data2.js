export default {
  // 判断是否登录
  'GET /umi/auth': (req, res) => {
    res.send({
      isLogin: false,
    });
  },
  // 支持值为Object 和 Array
  'POST /umi/login': (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === '123456') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'admin',
      });
    } else if (username === 'user123' && password === '123456') {
      res.send({
        err: 0,
        msg: '成功',
        currentAuthority: 'user',
      });
    } else {
      res.send({
        err: 1,
        msg: '失败',
      });
    }
  },
};
