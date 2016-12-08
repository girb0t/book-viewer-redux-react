import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Cart extends Component {
  renderList() {
    return this.props.cartItems.map((item) => {
      return (
        <li>{item.title}</li>
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Shopping Cart</h3>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cartItems: state.cartItems
  };
}

export default connect(mapStateToProps)(Cart);
