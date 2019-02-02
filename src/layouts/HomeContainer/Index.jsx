import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class HomeContainer extends Component {
  componentDidMount() {
    // do something
  }

  render() {
    const { children } = this.props;
    return (
      <div>
        <Link to="/home">首页</Link>
        <br />
        <Link to="/login">登陆页</Link>
        <br />
        <Link to="/compute">计算</Link>
        {children}
      </div>
    );
  }
}
HomeContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
export default HomeContainer;
