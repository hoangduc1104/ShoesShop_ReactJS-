import React from 'react';
import axiosClient from '../axiosClient';

const USER_API = {
  getMe: async (id) => {
    const url = `/user/${id}`;
    const response = await axiosClient.get(url);
    return response;
  },
  getUserByEmail: async (email) => {
    const url = `/user/${email}`;
    const response = await axiosClient.get(url);
    return response;
  },
  getUserByPhoneNumber: async (phone) => {
    const url = `/user/phone/${phone}`;
    const response = await axiosClient.get(url);
    return response;
  },
};

export default USER_API;
