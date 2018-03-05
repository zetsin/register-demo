import React from 'react';

import './index.css';

const Comp = props => {
  const { content } = props;

  return (
    <div className="show-content">
      <pre>{content}</pre>
    </div>
  );
};

export default Comp;
