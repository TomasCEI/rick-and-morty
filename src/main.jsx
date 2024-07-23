import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/index.css'


import Ubicaciones from './pages/Ubicaciones';
import Personajes from './pages/Personajes';
import Episodios from './pages/Episodios';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "personajes",
//     element: <Personajes />,
//   },
//   {
//     path: "ubicaciones",
//     element: <Ubicaciones />,
//   },
//   {
//     path: "episodios",
//     element: <Episodios />,
//   },
//   // <Route path="/personajes" element={<Personajes />} />
//   // <Route path="/ubicaciones" element={<Ubicaciones />} />
//   // <Route path="/episodios" element={<Episodios />} />
//   // <Route path="/" element={<Personajes />} />
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <App />
  </React.StrictMode>,
)
