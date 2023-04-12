import React from 'react';
import axiosClient from '../axiosClient';

const CATEGORY_API = {
  getAll: async (data) => {
    const url = '/category';
    const response = await axiosClient.get(url, data);
    return response;
  },
};

export default CATEGORY_API;
