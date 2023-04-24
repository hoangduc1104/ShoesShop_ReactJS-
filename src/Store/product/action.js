import {
  GETALL_PRODUCT,
  LOADDING,
  SEARCH_RESULT,
  SEARCH_RELOAD,
  SEARCH_KEY,
  SEARCH_MAX,
  SEARCH_MIN,
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
export const setSearchKey = (payload) => ({
  type: SEARCH_KEY,
  payload,
});
export const setSearchMax = (payload) => ({
  type: SEARCH_MAX,
  payload,
});
export const setSearchMin = (payload) => ({
  type: SEARCH_MIN,
  payload,
});
