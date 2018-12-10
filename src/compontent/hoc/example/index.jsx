import React, { Component, compose } from 'react';
class SelectInput extends Component {
	static displayName = 'SelectInput';
	render() {
		const { selectedItem, isActive, onClickHeader, placeholder } = this.props;
		const { text } = selectedItem;
		return (
			<div>
				<div onClick={onClickHeader}>
					<Input type="text" disabled value={text} placeholder={placeholder} />
					<Icon className={isActive} name="angle-down" />
				</div>
			</div>
		);
	}
}
const searchDecorator = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
		}
		handleSearch = (keyword) => {
			this.setState({
				data: this.props.data,
				keyword
			});
			this.props.onSerch(keyword);
		};
		render() {
			const { data, keyword } = this.state;
			return <WrappedComponent {...this.props} data={data} keyword={keyword} onSerch={this.handleSearch} />;
		}
	};
};
const asyncSelectDecorator = (WrappedComponent) => {
	return class extends Component {
		componentDidMount() {
			const { url, params } = this.props;
			fetch(url, { params }).then((data) => {
				this.setState({
					data
				});
			});
		}
		render() {
			return <WrappedComponent {...this.props} data={this.state.data} />;
		}
	};
};
const FinalSelector = compose(asyncSelectDecorator, searchDecorator, asyncSelectDecortar)(Selector);
class SearchSelect extends Component {
	render() {
		return (
			<FinalSelector {...this.props}>
				<SelectInput />
				<SearchInput />
				<List />
			</FinalSelector>
		);
	}
}
export default SearchSelect;
