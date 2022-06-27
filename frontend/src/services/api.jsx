import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export const request = async (endpoint) => {
  try {
    const { data } = await api.get(endpoint);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const post = async (endpoint, body) => {
  try {
    const { data } = await api.post(endpoint, body);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default api;