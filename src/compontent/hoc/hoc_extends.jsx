//反向继承
import React from 'react';

const hoc = (WrappedComponent) => {
	return class extends WrappedComponent {
		render() {
			return (
				<div>
					<div>Hco</div>
					<div>hoc{JSON.stringify(this.props)}</div>
					{super.render()}
				</div>
			);
		}
	};
};
@hoc
class MyCompontent extends React.Component {
	static displayName = 'helloCompontent';
	render() {
		return <div>hello</div>;
	}
}
export default MyCompontent;
