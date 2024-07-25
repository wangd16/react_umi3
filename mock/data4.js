// 分页概念
import Mock from 'mockjs';
export default {
  'GET /umi/list': (req, res) => {
    // _limit 一页的条数
    const { _page = 1, _limit = 3 } = req.query;
    const totalPage = 3; //设定总页数
    const lastPageLimit = 2; //设定为页条数
    const total = _limit * (totalPage - 1) + lastPageLimit; //计算总条数

    res.send({
      code: 0,
      data: {
        _page,
        _limit,
        total,
        ...Mock.mock({
          [`data|${_page >= totalPage ? lastPageLimit : _limit}`]: [
            {
              'id|+1': 1,
              create_at: '@date("yyyy-MM-dd HH:mm:ss")',
              'type_str|1': [
                '中转费明细',
                '调整单明细',
                '代收到付明细',
                '客户运费明细',
                '导入失败明细',
              ],
              name: function () {
                return [
                  Mock.mock('@datetime(MMdd)'),
                  Mock.mock('@county()'),
                  this.operator,
                ].join('-');
              },
            },
          ],
        }),
      },
    });
  },
};

/**
 * 3  8条总数据，一页3条，第三页只有2条
 * 3*(3-1)+2=8
 * 4 10条数据，一页4条，第三页只有2条
 * 4*(3-1)+2=10
 * 5 12条数据，一页5条，第三页只有2条
 * 5*(3-1)+2=12
 *
 * */
