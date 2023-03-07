import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Rick from './component/RickandMorty';
import Single from './component/single';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Rick />,
  },
  {
    path: '/:id',
    element: <Single />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
