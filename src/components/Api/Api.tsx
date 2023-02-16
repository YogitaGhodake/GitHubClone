import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const getRepositories = async () => {
  const response = await axios.get(`${BASE_URL}/repositories`);
  return response.data;
};

export const searchRepositories = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/search/repositories?q=${query}`);
  return response.data.items;
};

export const getRepository = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/repositories/${id}`);
  return response.data;
};