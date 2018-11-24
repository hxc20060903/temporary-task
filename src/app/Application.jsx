import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import AppLayout from './AppLayout';

export default function Application() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes />
      </AppLayout>
    </BrowserRouter>
  );
}
