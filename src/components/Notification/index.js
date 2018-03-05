import React from 'react';

import './index.css';

const Comp = props => {
  const { message } = props;

  return (
    <div
      className="notification"
      style={{
        display: message ? 'block' : 'none'
      }}>
      <pre>{message}</pre>
    </div>
  );
};

export default Comp;
