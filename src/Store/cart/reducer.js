import { getProductInCart } from '../../helper/cart';
import { SETCART, SETLOADDING, SETOPENCART } from './constant';

const initState = {
  cart: getProductInCart() || null,
  loadding: false,
  openCart: false,
};

function reducer(state, action) {
  switch (action.type) {
    case SETCART:
      return {
        ...state,
        cart: action.payload,
      };
    case SETLOADDING:
      return {
        ...state,
        cart: action.payload,
      };
    case SETOPENCART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      throw new Error('INvalid Action');
  }
}

export { initState };
export default reducer;
