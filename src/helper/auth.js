import cookies from 'js-cookie';
import { useState } from 'react';
import AuthService from '../service/auth';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Store';

export function setToken(token) {
  cookies.set('token', token);
  return token;
}
export function getToken() {
  if (typeof cookies.get('token') !== 'undefined') {
    return cookies.get('token');
  }
  return '';
}

export function setIsValidToken(value) {
  cookies.set('isValid', value);
  return value;
}
export function getIsValidToken() {
  if (typeof cookies.get('isValid') !== 'undefined') {
    return JSON.parse(cookies.get('isValid'));
  }
  return '';
}

export function setUser(user) {
  cookies.set('user', JSON.stringify(user));
  return user;
}
export function getUser() {
  if (typeof cookies.get('user') !== 'undefined') {
    return JSON.parse(cookies.get('user'));
  }
  return '';
}

// const handleLogout = () => {
//   cookies.remove('token');
//   cookies.remove('isValid');
//   cookies.remove('user');
//   navigate('/', { replace: true });
// };
