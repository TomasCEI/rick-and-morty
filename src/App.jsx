import { useState } from 'react'
import './css/App.css'
import './css/rick-and-morty.css'

import { BrowserRouter as Router, Routes, Route, Link, NavLink  } from 'react-router-dom';

import Ubicaciones from './pages/Ubicaciones';
import Personajes from './pages/Personajes';
import Episodios from './pages/Episodios';


function App() {
  // const [seccion, setSeccion] = useState("")

  return (
    <Router>
    <main className="Container">
      <header className="Header">
        <Link to="/">
          <h1 className="Header-title">Rick And Morty</h1>
        </Link>
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
            {/* <li><NavLink to="/personaje/5" className="Button-Link">Personaje 5</NavLink></li> */}
            <li><NavLink to="/ubicaciones" className="Button-Link">Ubicaciones</NavLink></li>
            <li><NavLink to="/episodios" className="Button-Link">Episodios</NavLink></li>
          </ul>
        </nav>
      </header>


      {/* Aca creamos un "switch"  de useState seccion */}
      {/* <div className="Content">
        {seccion == "personajes" && <Personajes />}
        {seccion == "ubicaciones" && <Ubicaciones />}
        {seccion == "episodios" && <Episodios />} 
      </div> */}

      {/* Esta version utiliza react router  */}
      <div className="Content">
          {/* posibles Rutas */}
          <Routes>
              <Route path="/personajes"   element={<Personajes />}    />
              <Route path="/ubicaciones"  element={<Ubicaciones />}   />
              <Route path="/episodios"    element={<Episodios />}     />
              {/* Path o Ruta Principal - Raiz */}
              <Route path="/"             element={<Personajes />}    />
          </Routes>

      </div>


    </main>
    </Router>
  )
}

export default App
