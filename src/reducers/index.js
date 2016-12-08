import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
import CartReducer from './reducer_cart';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook,
  cart: CartReducer,
});

export default rootReducer;
