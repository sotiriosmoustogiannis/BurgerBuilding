import { useState } from "react";
import { login } from "../../services/api";
import { useMutation } from "react-query";
import { AxiosError, AxiosResponse } from "axios";

const useLogin = (onSuccess: (...args: any) => void) => {
    const [error, setError] = useState<string | null>(null);
    
    const { mutate, isLoading } = useMutation(login, {
        onSuccess: (response: AxiosResponse) => {
            onSuccess(response.data.token)
        },
        onError: (error: AxiosError) => {
            if (error.response?.status === 401) {
                setError('Invalid credentials. Please try again.');
            }else {
                setError('Something went wrong');
            }
        }
    });

    return { login: mutate, isLoading, error }
}

export default useLogin