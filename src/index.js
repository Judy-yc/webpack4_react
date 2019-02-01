import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, hot } from "react-hot-loader";
import App from "./app";
// 可省略.js后缀名
const render = (App) => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById("root"),
  );
};
render(App);
if (module.hot) {
  hot(module)(App);
}
