import axios from 'axios';

const API_BASE_URL = 'https://react-interview.xm.com';

export const login = async ({ name, password }: { name: string, password: string }) => {
    return await axios.post(`${API_BASE_URL}/login`, { name, password });
};

export const fetchIngredients = async (token: string | null) => {
  return await axios.get(`${API_BASE_URL}/ingredients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
