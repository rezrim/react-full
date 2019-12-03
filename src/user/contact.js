import React, { Component } from 'react';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    const { value} = this.props;
    return (
      <div>
        <h1>Isinya adalah : {value}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.value,
});

export default connect(mapStateToProps, null)(Contact);