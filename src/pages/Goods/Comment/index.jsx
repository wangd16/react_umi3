import React from 'react';
import { history, useParams } from 'umi';

function Comment() {
  const { id } = useParams();
  function handleBack() {
    history.go(-1);
  }

  function toDetail() {
    history.push(`/goods/${id}/comment/3`);
  }

  return (
    <div>
      pages Comment-page-{id}
      <div>
        <button onClick={handleBack}>回退</button>
        <button onClick={toDetail}>查看评论列表详情</button>
      </div>
    </div>
  );
}

export default Comment;
