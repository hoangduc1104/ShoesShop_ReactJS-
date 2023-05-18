import { getProductResult } from '../../helper/product';
import {
  GETALL_PRODUCT,
  LOADDING,
  SEARCH_RESULT,
  SEARCH_RELOAD,
  SEARCH_KEY,
  SEARCH_MAX,
  SEARCH_MIN,
  TYPING_USERS,
} from './constant';

const initState = {
  productsData: [],
  loadding: false,
  searchResult: [],
  searchReload: false,
  searchKey: '',
  searchMax: '',
  searchMin: '',
  typingUsers: false,
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
    case SEARCH_RELOAD:
      return {
        ...state,
        searchReload: action.payload,
      };
    case SEARCH_KEY:
      return {
        ...state,
        searchKey: action.payload,
      };
    case SEARCH_MAX:
      return {
        ...state,
        searchMax: action.payload,
      };
    case SEARCH_MIN:
      return {
        ...state,
        searchMin: action.payload,
      };
    case TYPING_USERS:
      return {
        ...state,
        typingUsers: action.payload,
      };
    default:
      throw new Error('INvalid Action');
  }
}

export { initState };
export default reducer;
