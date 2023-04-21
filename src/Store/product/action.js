import {
  GETALL_PRODUCT,
  LOADDING,
  SEARCH_RESULT,
  SEARCH_RELOAD,
} from './constant';

export const getAllProduct = (payload) => ({
  type: GETALL_PRODUCT,
  payload,
});
export const loadding = (payload) => ({
  type: LOADDING,
  payload,
});
export const searchResult = (payload) => ({
  type: SEARCH_RESULT,
  payload,
});
export const searchReload = (payload) => ({
  type: SEARCH_RELOAD,
  payload,
});
