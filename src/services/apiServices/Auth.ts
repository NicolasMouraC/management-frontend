import axios from 'axios';
import { setToken, setUserId } from '../../utils';
import { loginPayload, registerPayload } from './types';

export const login = async (payload: loginPayload) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/users/login`, {
      Email: payload.email,
      Password: payload.password,
    });

    setToken(response.data.token);
    setUserId(response.data.id);

    return response.data;
  } catch {
    throw new Error('Error while trying to login.');
  }
};

export const register = async (payload: registerPayload) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/users/register`, {
      Name: payload.name,
      Email: payload.email,
      Password: payload.password,
    });

    return response.data;
  } catch {
    throw new Error('Error while trying to login.');
  }
};
