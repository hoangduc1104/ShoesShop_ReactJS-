import React from 'react';
import axiosClient from '../axiosClient';

const COMMENT_API = {
  getAllCommentByProduct: async (productId) => {
    const url = `/comment/${productId}`;
    const response = await axiosClient.get(url);
    return response;
  },
  postComment: async (params, data, token) => {
    const url = 'comment';
    const response = await axiosClient.post(url, data, {
      params: params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  },
};
export default COMMENT_API;
