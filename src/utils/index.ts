import { jwtDecode } from 'jwt-decode';
import Billing from '../types/models/Billing';
import { Dayjs } from 'dayjs';

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getUserId = () => {
  return localStorage.getItem('userId');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const setUserId = (userId: string) => {
  localStorage.setItem('userId', userId);
};

export const removeToken = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
};

export const isAuthenticated = () => {
  const token = getToken();
  if (token) {
    try {
      const { exp } = jwtDecode<{ exp: number }>(token);
      if (exp < Date.now() / 1000) {
        removeToken();
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }

  return false;
};

export const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(parsedDate);
};

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isBillingDelayed = (billing: Billing) => {
  const currentDate = new Date();

  if (!billing.isPayed && new Date((billing.dueDate as Dayjs).toString()) < currentDate) {
    return true;
  }

  return false;
};

export const formatToBrlCurrent = (value: string | number) => {
  return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const regexOnlyNumbers = (input: string) => {
  const onlyNumber = input.replace(/[^0-9+]/g, '');

  return onlyNumber;
};
