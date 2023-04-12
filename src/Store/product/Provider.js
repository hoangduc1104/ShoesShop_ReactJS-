import { useReducer } from 'react';
import ProductContext from './Context';
import reducer, { initState } from './reduce';

function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ProductContext.Provider value={[state, dispatch]}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
