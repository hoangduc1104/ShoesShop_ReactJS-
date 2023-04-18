import { useContext, useReducer } from 'react';
import CartContext from './Context';

export const useCart = () => {
  return useContext(CartContext);
};
