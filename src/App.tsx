import { GlobalStyle } from './global/global';
import { AuthProvider } from './hooks/auth';
import { Routes } from './routes';

export function App() {
  return (
    <AuthProvider>
      <Routes />
      <GlobalStyle />
    </AuthProvider>
  );
}
