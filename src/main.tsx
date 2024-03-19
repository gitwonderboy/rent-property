import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppPage from './AppPage.tsx';
import PropertyPage from './PropertyPage.tsx';
import ErrorRoutePage from './ErrorRoutePage.tsx';
import ContactPage from './ContactPage.tsx';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <AppPage />, errorElement: <ErrorRoutePage /> },
  { path: '/properties', element: <PropertyPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
