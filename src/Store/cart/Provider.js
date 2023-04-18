import { useReducer } from 'react';
import reducer, { initState } from './reducer';
import CartContext from './Context';

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <CartContext.Provider value={[state, dispatch]}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
