import axios from 'axios';
import Client from '../../types/models/Client';
import Billing from '../../types/models/Billing';
import { getUserId } from '../../utils';
import { billingPayload, clientPayload } from './types';

export const getClients = async (page: number, rowsPerPage: number): Promise<Client[]> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/clients?userId=${getUserId()}&page=${page + 1}&rowsPerPage=${rowsPerPage}`,
    );

    return response.data;
  } catch {
    throw new Error('Error while getting clients.');
  }
};

export const getBillings = async (clientId: number, page: number, rowsPerPage: number): Promise<Billing[]> => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}/billings?page=${page + 1}&rowsPerPage=${rowsPerPage}`,
    );

    return response.data;
  } catch {
    throw new Error('Error while getting client billings.');
  }
};

export const createClient = async (payload: clientPayload) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/clients`, {
      name: payload.name,
      document: payload.document,
      phone: payload.phone,
      address: payload.address,
      userId: getUserId(),
    });

    return response.data;
  } catch {
    throw new Error('Error while creating client.');
  }
};

export const editClient = async (clientId: number, payload: clientPayload) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}`, {
      name: payload.name,
      document: payload.document,
      phone: payload.phone,
      address: payload.address,
      userId: 1,
    });

    return response.data;
  } catch {
    throw new Error('Error while editing client.');
  }
};

export const deleteClient = async (clientId: number) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}`);

    return response.data;
  } catch {
    throw new Error('Error while deleting client.');
  }
};

export const createBilling = async (clientId: number, payload: billingPayload) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}/billings`, {
      description: payload.description,
      value: payload.value,
      dueDate: payload.dueDate,
      isPayed: payload.isPayed,
    });

    return response.data;
  } catch {
    throw new Error('Error while creating client.');
  }
};

export const editBilling = async (clientId: number, billingId: number, payload: billingPayload) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}/billings/${billingId}`, {
      description: payload.description,
      value: payload.value,
      dueDate: payload.dueDate,
      isPayed: payload.isPayed,
    });

    return response.data;
  } catch {
    throw new Error('Error while editing billing.');
  }
};

export const deleteBilling = async (clientId: number, billingId: number) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BASE_API_URL}/clients/${clientId}/billings/${billingId}`,
    );

    return response.data;
  } catch {
    throw new Error('Error while deleting billing.');
  }
};
