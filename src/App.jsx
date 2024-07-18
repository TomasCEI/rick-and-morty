import { useState, useEffect } from 'react'
import './css/App.css'
import './css/rick-and-morty.css'

import Ubicaciones from './pages/Ubicaciones';
import Personajes from './pages/Personajes';
import Episodios from './pages/Episodios';
import AlienAI from './components/Alien';

function App() {
  const [seccion, setSeccion] = useState("personajes");

  useEffect( ()=> {
    document.title=`${seccion} de Rick And Morty API`;
  }, [seccion]);

  return (
    <div className="Container">
      <header className="Header">
        <div className="Header-container">
          <div style={{fontSize: "xx-large"}}><AlienAI color={"red"}/></div>
          <h1 className="Header-title">Rick And Morty</h1>
          <div style={{fontSize: "xx-large"}}><AlienAI/></div>
        </div>
        <nav>
          <ul>
            <li><button onClick={()=>setSeccion("personajes")}>Personajes</button></li>
            <li><button onClick={()=>setSeccion("ubicaciones")}>Ubicaciones</button></li>
            <li><button onClick={()=>setSeccion("episodios")}>Episodios</button></li>
          </ul>
        </nav>
      </header>

      <main className="Content">
        {seccion == "personajes" && <Personajes />}
        {seccion == "ubicaciones" && <Ubicaciones />}
        {seccion == "episodios" && <Episodios />} 
      </main>

    </div>
  )
}

export default App
