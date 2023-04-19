import React from 'react';
import axiosClient from '../axiosClient';

const AUTH_API = {
  signup: async (data) => {
    const url = '/auth/signup';
    const response = await axiosClient.post(url, data);
    return response;
  },
  login: async (data) => {
    const url = '/auth/login';
    const response = await axiosClient.post(url, data);
    return response;
  },
  getMe: async (data, token) => {
    const url = '/auth';
    const response = await axiosClient.post(url, data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },
};

export default AUTH_API;
