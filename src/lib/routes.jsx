import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Episodios from '../pages/Episodios';
import Personajes from '../pages/Personajes';
import Personaje from '../pages/Personaje';
import Ubicaciones from '../pages/Ubicaciones';
//import App from '../App';
import AppLayout from '../AppLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '',
        element: <Personajes />,
      },
      {
        path: 'episodios',
        element: <Episodios />,
      },
      {
        path: 'personajes',
        element: <Personajes />,
      },
      {
        path: 'personaje/:personajeId',
        element: <Personaje />,
      },
      {
        path: 'ubicaciones',
        element: <Ubicaciones />,
      },
    ],
  },
]);

export default router;