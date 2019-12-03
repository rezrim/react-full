import React, { Component } from 'react';
import { connect } from 'react-redux';

import {decreaseAction,increaseAction} from '../store/actions/action';

class Home extends Component {
  render() {
    const { value, decreaseAction, increaseAction } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button onClick={increaseAction}>increment</button>
        <button onClick={decreaseAction}>decrease</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

const mapDispatchToProps = (dispatch) => ({
  increaseAction: () => dispatch(increaseAction()),
  decreaseAction: () => dispatch(decreaseAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);