import React from 'react';

const Scroll = (props) => {
  return <div className="bt b--black overflow-container vh-75">{props.children}</div>;
};

export default Scroll;
