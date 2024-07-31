import React from 'react';
import { useParams } from 'umi';

function Detail() {
  const { id, cid } = useParams();

  function handleBack() {
    history.go(-1);
  }

  return (
    <div>
      pages Comment-Detail-{id}-{cid}
      <br />
      <button onClick={handleBack}>回退</button>
    </div>
  );
}

export default Detail;
