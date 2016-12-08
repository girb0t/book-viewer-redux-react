import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Cart extends Component {
  render() {
    return (
      <h2>Shopping Cart</h2>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  };
}

export default connect(mapStateToProps)(Cart);
