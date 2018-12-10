//属性代理
import React from 'react';
const hoc = (WrappedComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				name: ''
			};
		}
		chageName = (e) => {
			console.log(e.target.value);
			this.setState({
				name: e.target.value
			});
		};
		render() {
			const newProps = {
				name: {
					value: this.state.name,
					onChange: this.chageName
				}
			};
			return (
				<div>
					<WrappedComponent {...this.props} {...newProps} />
				</div>
			);
		}
	};
};
@hoc
class MyCompontent extends React.Component {
	render() {
		return <input type="text" {...this.props.name} />;
	}
}
export default MyCompontent;
