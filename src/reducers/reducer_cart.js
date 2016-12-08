
export default function(state = [], action) {
  switch (action.type) {
  case 'ADD_ITEM_TO_CART':
    return [...state, action.payload];
  }
  return state;
}
