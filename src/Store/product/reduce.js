import { getProductResult } from '../../helper/product';
import { GETALL_PRODUCT, LOADDING, SEARCH_RESULT } from './constant';

const initState = {
  productsData: [],
  loadding: false,
  searchResult: [],
};

function reducer(state, action) {
  switch (action.type) {
    case GETALL_PRODUCT:
      return {
        ...state,
        productsData: action.payload,
      };
    case LOADDING:
      return {
        ...state,
        loadding: action.payload,
      };
    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload,
      };
    default:
      throw new Error('INvalid Action');
  }
}

export { initState };
export default reducer;
