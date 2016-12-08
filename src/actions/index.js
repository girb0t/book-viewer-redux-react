export function selectBook(book) {
  // selectBook is an ActionCreator; it needs to return an actions,
  // an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}

export function addToCart(item) {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item
  }
}
