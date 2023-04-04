import React from 'react';
import axiosClient from '../axiosClient';

const AUTH_API = {
  login: async (data) => {
    const url = '/auth/login';
    const response = await axiosClient.post(url, data);
    return response;
  },
};

export default AUTH_API;
