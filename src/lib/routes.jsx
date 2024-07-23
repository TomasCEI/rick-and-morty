import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

// Mis Páginas
import Ubicaciones from '../pages/Ubicaciones';
import Personajes from '../pages/Personajes';
import Personaje from '../pages/Personaje'; // 1 personaje
import Episodios from '../pages/Episodios';
// Páginas especiales
import ErrorPage from "../error-page";
import Layout from '../Layout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
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
        }
    ],
  },
]);

export default router;