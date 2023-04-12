import React from 'react';
import axiosClient from '../axiosClient';

const PRODUCT_API = {
  getAll: async (data) => {
    const url = `/product`;
    const response = await axiosClient.get(url, { params: data });
    return response;
  },
  getById: async (id) => {
    const url = `/product/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
};

export default PRODUCT_API;
