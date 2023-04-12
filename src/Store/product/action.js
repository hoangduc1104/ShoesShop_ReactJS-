import { GETALL_PRODUCT, LOADDING, SEARCH_RESULT } from './constant';

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
