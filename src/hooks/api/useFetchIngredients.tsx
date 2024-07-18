import { useQuery } from "react-query";
import { fetchIngredients } from "../../services/api";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authentication.context";
import { AxiosResponse } from "axios";

const useFetchIngredients = () => {
  const { token, onLogout } = useContext(AuthContext);
  const [error, setError] = useState<string | null>(null);

  const {data, isLoading} = useQuery('ingredients', () => fetchIngredients(token), {
    select: (response: AxiosResponse) => {
        return response.data;
    },
    onError: (error: any) => {
      if (error.response.status === 401) {
        onLogout();
        return;
      }
      
      setError('Something went wrong. Please try again later.');
    },
    staleTime: 1000 * 10 * 10
  });

  return {ingredients: data, isLoading, error}
};

export default useFetchIngredients;