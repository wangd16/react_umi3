export default {
  // 支持值为Object 和 Array
  'GET /umi/goods': [
    { id: 1, name: '韭菜' },
    { id: 2, name: '西红柿' },
  ],
  'POST /api/users/create': (req, res) => {
    res.end('Ok');
  },
};
