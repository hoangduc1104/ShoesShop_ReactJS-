import React from 'react';
import axiosClient from '../../api/axiosClient';
import AUTH_API from '../../api/auth/authApi';

const AuthService = {
  login: (data) => AUTH_API.login(data),
  signup: (data) => AUTH_API.signup(data),
  getMe: (data, token) => AUTH_API.getMe(data, token),
};

export default AuthService;
