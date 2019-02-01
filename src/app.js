import React, { Component } from "react";
import PropTypes from "prop-types";
import CSSModules from "react-css-modules";
import Child from "./childCompontent";
import styles from "./app.css";
import Emit from "./emitter";
import Hoc from "./compontent/hoc/hoc_proxy";
import HocExtndes from "./compontent/hoc/hoc_extends";
console.log(HocExtndes.displayName);
//CSSModules 防止频繁写styles
@CSSModules(styles)
class App extends Component {
	static propTypes = {
		className: PropTypes.string,
		classPrefix: PropTypes.string,
		children: PropTypes.oneOfType([ PropTypes.node, PropTypes.arrayOf(PropTypes.node) ]),
		defaultActiveIndex: PropTypes.number,
		activeIndex: PropTypes.number,
		onChange: PropTypes.func
	};
	static childContextTypes = {
		num: PropTypes.number
	};
	static defaultProps = {
		classPrefix: "tabs",
		onChange: () => {}
	};
	getChildContext() {
		return {
			num: 2
		};
	}
	componentDidMount() {
		document.getElementsByTagName("a")[0].addEventListener("click", (e) => {
			e.preventDefault(); //阻止跳转等
			e.stopPropagation(); //阻止冒泡 但是ie下存在兼容问题
			e.cancelBubble = true; //ie下阻止
		});
	}
	handleClick = (e) => {
		e.stopPropagation(); //react 事件系统使用这个阻止冒泡;
		console.log(3);
	};
	float = () => {
		console.log("我冒泡了");
	};
	render() {
		return (
			<div onClick={this.float}>
				<p styleName="normal"> hello world </p> <button className="button"> 点击 </button>{" "}
				<a href="https://www.cnblogs.com/Benjamin/p/5184213.html"> 跳转 </a> <Child />
				<div>
					emtter组件通信 <Emit />
				</div>{" "}
				<div>
					hoc组件--属性代理 <Hoc />
				</div>
				<div>
					hoc组件--反向继承 <HocExtndes title="我是高阶组件反向继承" />
				</div>{" "}
			</div>
		);
	}
}
export default App;
