import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addToCart } from '../actions/index';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
        <button type="button"
          className="btn btn-primary"
          onClick={() => this.props.addToCart(this.props.book)}>
          Add to cart
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addToCart: addToCart }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
