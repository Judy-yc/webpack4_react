import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer, hot } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from './routes';
import Store from './store';
// 可省略js后缀名
const render = (Compontent) => {
  ReactDOM.render(
    <AppContainer>
      <Provider rootStore={Store()}>
        <Router>
          <Compontent />
        </Router>
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};
render(App);
if (module.hot) {
  hot(module)(App);
}
