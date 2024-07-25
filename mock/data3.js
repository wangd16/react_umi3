// 增删改
import Mock from 'mockjs';
export default {
  // 增加
  'POST /umi/add': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body, a: 2 },
            msg: '成功',
          },
          {
            code: 2,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
  // 删除
  'DELETE /umi/delete/:id': (req, res) => {
    console.log(req.params.id);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { task_id: '123' },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
  // 删除
  'PATCH /umi/update/:id': (req, res) => {
    console.log(req.body);
    res.send(
      Mock.mock({
        'data|1': [
          {
            code: 0,
            data: { ...req.body },
            msg: '成功',
          },
          {
            code: 1,
            msg: '失败',
          },
        ],
      }).data,
    );
  },
};
