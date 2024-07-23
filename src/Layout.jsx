import { useState, useEffect } from 'react'
import './css/App.css'
import './css/rick-and-morty.css'

import { BrowserRouter as Router, Route, Link, Routes, NavLink } from 'react-router-dom';

import { Outlet } from 'react-router-dom';

import AlienAI from './components/Alien';

function Layout({children}) {
  return (
    // <Router>
      <div className="Container">
        <header className="Header">
          <div className="Header-container">
            <div style={{fontSize: "xx-large"}}><AlienAI color={"red"}/></div>
            <Link to="/"><h1 className="Header-title">Rick And Morty</h1></Link>
            
            <div style={{fontSize: "xx-large"}}><AlienAI/></div>
          </div>
          <nav>
            <ul>
            {/* v1. Sistema de Links con useState + botones  */}
            {/* 
            <li><button onClick={ () => { setSeccion("personajes")}}>Personajes</button></li>
            <li><button onClick={ () => { setSeccion("ubicaciones")}}>Ubicaciones</button></li>
            <li><button onClick={ () => { setSeccion("episodios")}}>Episodios</button></li> 
            */}
          
            {/* v2. Sistema nuevo con React Router  */}
            {/* 
            <li><Link to="/personajes">Personajes</Link></li>
            <li><Link to="/ubicaciones">Ubicaciones</Link></li>
            <li><Link to="/episodios">Episodios</Link></li> 
            */}

            {/* v3. Navegacion con React Router  */}
            <li><NavLink to="/personajes" className="Button-Link">Personajes</NavLink></li>
            <li><NavLink to="/ubicaciones" className="Button-Link">Ubicaciones</NavLink></li>
            <li><NavLink to="/episodios" className="Button-Link">Episodios</NavLink></li>
            {/* <li><NavLink to="/personaje/5" className="Button-Link">Personaje 5</NavLink></li> */}

            </ul>
          </nav>
        </header>

    
        <main className="Content">
          {/* 
          {seccion == "personajes" && <Personajes />}
          {seccion == "ubicaciones" && <Ubicaciones />}
          {seccion == "episodios" && <Episodios />}  
          */}
      
          {/* <Routes>
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/episodios/:id/:tipo" element={<Episodios />} />
            <Route path="/" element={<Personajes />} />
          </Routes> */}

            <Outlet />

            {/* Mostrar errores en Content en vez de pantalla completa  */}
            {children}
          
        </main>

      </div>
      // </Router>
  )
}

export default Layout
