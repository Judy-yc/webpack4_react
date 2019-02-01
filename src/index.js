import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer, hot } from 'react-hot-loader';
import App from './routes';
// 可省略js后缀名
const render = (Compontent) => {
  ReactDOM.render(
    <AppContainer>
      <Compontent />
    </AppContainer>,
    document.getElementById('root'),
  );
};
render(App);
if (module.hot) {
  hot(module)(App);
}
