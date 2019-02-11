import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  componentDidMount() {
    // do something
  }

  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Link to="/home">首页</Link>
        <br />
        <Link to="/login">登陆页</Link>
        <br />
        <Link to="/compute">计算</Link>
        <br />
        <Link to="/other">hooks</Link>
        {children}
      </Fragment>
    );
  }
}
HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HomeContainer;
