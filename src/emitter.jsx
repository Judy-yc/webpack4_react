import React, { Component } from 'react';
import { EventEmitter } from 'events';
const emii = new EventEmitter();
class Emitter extends Component {
	send = () => {
		emii.emit('chufa', 'hello child');
	};
	render() {
		return (
			<div>
				我是emitter 组件
				<button onClick={this.send}>传递值到子组件</button>
				<Child />
			</div>
		);
	}
}
class Child extends Component {
	constructor(props) {
		super(props);
		this.state = {
			message: ''
		};
	}
	componentDidMount() {
		this.recive = emii.addListener('chufa', (data) => {
			this.setState({
				message: data
			});
		});
	}
	componentWillUnmount() {
		emii.removeListener(this.recive);
	}
	render() {
		return <div>我是收到的值{this.state.message}</div>;
	}
}
export default Emitter;
