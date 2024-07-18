export interface AuthContextValue {
    token: string | null,
    onLogin: ((token: string) => void),
    onLogout: (() => void)
}