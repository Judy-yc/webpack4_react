import React, { useState, Fragment, useEffect } from 'react';

const Hello = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('异步');
  }, []);
  return (
    <Fragment>
      我是
      {count}
      <button type="button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </Fragment>
  );
};

export default Hello;
