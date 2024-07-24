import React from 'react';

function Goods() {
  function total(num) {
    const arr = [];
    while (arr.length < num) {
      const x = Math.floor(Math.random() * num + 1);
      if (!arr.includes(x)) {
        arr.push(x);
      }
    }
    return arr;
  }
  console.log(total(10));
  return <div>pages Goods</div>;
}

export default Goods;
