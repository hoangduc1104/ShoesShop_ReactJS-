import React from 'react';
import axiosClient from '../axiosClient';

const CART_API = {
  getAllByUserId: async (id, token) => {
    const url = `/cart/${id}`;
    const response = await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },

  addToCart: async (userid, data, token) => {
    const url = `/cart/${userid}`;
    const response = await axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },

  deleteProductInCart: async (data, token) => {
    const url = 'cart';
    const response = await axiosClient.delete(url, {
      params: data,
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },
};

export default CART_API;
