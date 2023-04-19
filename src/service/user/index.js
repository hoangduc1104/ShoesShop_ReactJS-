import React from 'react';
import USER_API from '../../api/user/userApi';

const UserService = {
  getUserByEmail: (email) => USER_API.getUserByEmail(email),
  getUserByPhone: (phone) => USER_API.getUserByPhoneNumber(phone),
};

export default UserService;
