import { SETCART, SETLOADDING, SETOPENCART } from './constant';

export const setCart = (payload) => ({
  type: SETCART,
  payload,
});
export const setLoadding = (payload) => ({
  type: SETLOADDING,
  payload,
});
export const setOpenCart = (payload) => ({
  type: SETOPENCART,
  payload,
});
