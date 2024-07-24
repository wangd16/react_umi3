import React from 'react';
// import { history } from 'umi';
import { useHistory, useParams, useLocation, useRouteMatch } from 'umi';

// 获取路由上下文
// function Detail ({
//     location: { search },
//     match: {
//         params: { id }
//     }
// })

function Detail() {
  const history = useHistory();

  const { id } = useParams();

  function getComment() {
    // history.push(`/goods/${id}/comment`);

    history.push({
      pathname: `/goods/${id}/comment`,
      query: { a: 3 },
    });
  }

  return (
    <div>
      pages Detail <h3>{id}</h3>
      {/* <div>search：{search}</div> */}
      <button onClick={getComment}>编程式跳转(命令式)</button>
    </div>
  );
}

export default Detail;
