import { useContext, useReducer } from 'react';
import ProductContext from './Context';

export const useProducts = () => {
  return useContext(ProductContext);
};
