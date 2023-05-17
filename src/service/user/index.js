import React from 'react';
import USER_API from '../../api/user/userApi';

const UserService = {
  getUserById: (id) => USER_API.getUserById(id),
  getUserByEmail: (email) => USER_API.getUserByEmail(email),
  getByEmailuser: (email) => USER_API.getUserByEmailUser(email),
  getUserByPhone: (phone) => USER_API.getUserByPhoneNumber(phone),
  uploadImage: (params, data, token) =>
    USER_API.uploadAvatar(params, data, token),
};

export default UserService;
