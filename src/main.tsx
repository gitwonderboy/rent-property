import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import Property from './Property.tsx';
import ErrorRoute from './ErrorRoute.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorRoute /> },
  { path: '/properties', element: <Property /> },
  { path: '/contact', element: <Property /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
