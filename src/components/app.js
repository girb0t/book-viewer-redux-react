import React from 'react';
import { Component } from 'react';

import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import Cart from '../containers/cart';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='col-sm-4'>
          <BookList />
        </div>
        <div className='col-sm-4'>
          <BookDetail />
        </div>
        <div className='col-sm-4'>
          <Cart />
        </div>
      </div>
    );
  }
}
