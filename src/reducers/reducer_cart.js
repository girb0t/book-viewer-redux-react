const INITITIAL_STATE = { cartItems: [] }

export default function(state = INITITIAL_STATE, action) {
  switch (action.type) {
  case 'ADD_ITEM_TO_CART':
    // const cartItems = state.cartItems.concat(action.payload);
    const cartItems = [...state.cartItems, action.payload];
    return { ...state, cartItems: cartItems};
  }
  return state;
}
