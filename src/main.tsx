import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx';
import { QueryClient, QueryClientProvider } from 'react-query'
import { AuthProvider } from './context/authentication.context.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
