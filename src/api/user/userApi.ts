import React from 'react';
import axiosClient from '../axiosClient';

const USER_API = {
  getMe: async (id) => {
    const url = `/user/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
  getUser: async (id) => {
    const url = `/user/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
};

export default USER_API;
