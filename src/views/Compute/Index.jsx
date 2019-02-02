import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PropTypes } from 'prop-types';
import computeState from '../../store/asynCompute';

@inject(({ rootStore }) => ({
  ...rootStore,
}))
@observer
class Compute extends Component {
  static defaultProps = {
    computeState: {},
  };

  componentDidMount() {
    // do something
  }

  handleAdd = () => {
    console.log(this.props);
  };

  render() {
    const {
      computeState: { num },
    } = this.props;
    return (
      <div>
        <input type="text" disabled value={num} />
        <br />
        <button type="button" onClick={this.handleAdd}>
          add
        </button>
        <button type="button">subtract</button>
      </div>
    );
  }
}
Compute.propTypes = {
  computeState: PropTypes.instanceOf(computeState),
};
export default Compute;
