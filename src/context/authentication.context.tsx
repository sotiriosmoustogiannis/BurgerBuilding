import { createContext, useMemo, useCallback, ReactNode, useState} from "react";
import { AuthContextValue } from './interfaces.context'

// "as" keyword used to fake typescript context initialization errors
const initialAuthContextValue= {} as AuthContextValue
export const AuthContext = createContext<AuthContextValue>(initialAuthContextValue);

export const AuthProvider = ({ children}: { children: ReactNode}) => {

    const [token, setToken] = useState<string | null>(localStorage.getItem('token') ?? null)

    const onLogin = useCallback((token: string) => {
        localStorage.setItem('token', token)
        setToken(token);
    }, [setToken])

    const onLogout = useCallback(() => {
        localStorage.removeItem('token')
        setToken(null)
    }, [setToken])

    const value = useMemo(() => ({ token, onLogin, onLogout }), [token, onLogin, onLogout]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}