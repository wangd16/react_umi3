import React from 'react';
import Nav from '@/components/Nav';

function BaseLayouts(props) {
  return (
    <div>
      <Nav />
      <div>{props.children}</div>
    </div>
  );
}

export default BaseLayouts;
