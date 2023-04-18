import React from 'react';
import CART_API from '../../api/cart/cartApi';

const CartService = {
  getAllByUserId: (id, token) => CART_API.getAllByUserId(id, token),
  addtocart: (id, data, token) => CART_API.addToCart(id, data, token),
  deleteProductInCart: (data, token) =>
    CART_API.deleteProductInCart(data, token),
};

export default CartService;
