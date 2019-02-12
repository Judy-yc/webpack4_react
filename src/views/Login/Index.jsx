import React, { Component, lazy, Suspense } from 'react';

const Test = lazy(() => import('./lazy'));
class Login extends Component {
  componentDidMount() {
    // do something
  }

  render() {
    return (
      <div>
        我是登陆页面
        <Suspense fallback={<div>loading...</div>}>
          <Test />
        </Suspense>
      </div>
    );
  }
}
export default Login;
