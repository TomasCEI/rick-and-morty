import { useState, useEffect } from 'react'
import './css/App.css'
import './css/rick-and-morty.css'
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from 'react-router-dom';

import Ubicaciones from './pages/Ubicaciones';
import Personajes from './pages/Personajes';
import Episodios from './pages/Episodios';
import AlienAI from './components/Alien';

function App() {
  const [seccion, setSeccion] = useState("personajes");

  useEffect( ()=> {
    document.title=`${seccion} de Rick And Morty API`;
  }, [seccion]);

  function DetallePersonaje() {
    let { id } = useParams();
    return <h2>Detalles del personaje con ID: {id}</h2>;
  }

  
  let { id, tipo } = useParams();

  return (
    <Router>
      <div className="Container">
        <header className="Header">
          <div className="Header-container">
            <div style={{fontSize: "xx-large"}}><AlienAI color={"red"}/></div>
            <Link to="/"><h1 className="Header-title">Rick And Morty</h1></Link>
            
            <div style={{fontSize: "xx-large"}}><AlienAI/></div>
          </div>
          <nav>
            <ul>
              {/* <li><button onClick={()=>setSeccion("personajes")}>Personajes</button></li>
              <li><button onClick={()=>setSeccion("ubicaciones")}>Ubicaciones</button></li>
              <li><button onClick={()=>setSeccion("episodios")}>Episodios</button></li> */}
              <li><NavLink  to="/personajes" className="Button-Link">Personajes</NavLink ></li>
              <li><NavLink  to="/ubicaciones" className="Button-Link">Ubicaciones</NavLink ></li>
              <li><NavLink  to="/episodios" className="Button-Link">Episodios</NavLink ></li>
              

            </ul>
          </nav>
        </header>

    
        <main className="Content">
          id eS:
                {id} tipo es {tipo}
          {/* 
          {seccion == "personajes" && <Personajes />}
          {seccion == "ubicaciones" && <Ubicaciones />}
          {seccion == "episodios" && <Episodios />}  
          */}
      
          <Routes>
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/episodios/:id/:tipo" element={<Episodios />} />
            <Route path="/" element={<Personajes />} />
          </Routes>
        </main>

      </div>
      </Router>
  )
}

export default App
