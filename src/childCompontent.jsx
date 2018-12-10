import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Test extends Component {
	static contextTypes = {
		num: PropTypes.number
	};
	render() {
		return (
			<div>
				hello child compontent{this.context.num}
				<TetsChild />
			</div>
		);
	}
}
class TetsChild extends Component {
	static contextTypes = {
		num: PropTypes.number
	};
	componentDidMount() {
		console.log(this.context);
	}
	render() {
		return <div>我是testchild{this.context.num}</div>;
	}
}
export default Test;
