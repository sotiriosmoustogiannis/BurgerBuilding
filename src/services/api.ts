import axios from "axios";
import appConfig from "../configs/appConfig";

export const login = async ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  return await axios.post(`${appConfig.API_BASE_URL}/login`, {
    name,
    password,
  });
};

export const fetchIngredients = async (token: string | null) => {
  return await axios.get(`${appConfig.API_BASE_URL}/ingredients`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
