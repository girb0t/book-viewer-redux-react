import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

 class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

// Whatever is returned will show up as props inside of BookList.
function mapStateToProps(state) {
  // This function is the glue between React and Redux.


  // Whenever the application state changes, the Booklist container will automatically
  // rerender.
  return {
    books: state.books,
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know about this new
// dispatch method, selectBook. Make it available as a prop.

// Here we are using connect to take some state and map it to the props of our container
// and take an action creator and make it available to be called inside the container.
// This is probably the most generic use case of 'connect' but there are more (see
// 'react-redux' docs)
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
