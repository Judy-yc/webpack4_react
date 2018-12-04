//index.js 
import React from 'react';
import ReactDOM from "react-dom";
import App from './app'; // 可省略.js后缀名
import {AppContainer, hot} from 'react-hot-loader'
const render = (App) => {
	ReactDOM.render(
		<AppContainer>
			<App />
		</AppContainer>,
	document.getElementById('root')
	)
}
render(App)
if (module.hot) {
    hot(module)(App)
}