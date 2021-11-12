import React from 'react';
import { useAuth } from '../hooks/auth';

import { AppRoutes } from './aop.routes';

export function Routes() {
  const { loading } = useAuth();

  if (loading) return <p>Carregando...</p>;

  return <AppRoutes />;
}
