import { useState } from 'react'
import './css/App.css'
import './css/rick-and-morty.css'

import Ubicaciones from './pages/Ubicaciones';
import Personajes from './pages/Personajes';
import Episodios from './pages/Episodios';

function App() {
  const [seccion, setSeccion] = useState("")

  return (
    <main className="Container">
      <header className="Header">
        <h1 className="Header-title">Rick And Morty</h1>
        <nav>
          <ul>
            <li><button onClick={ () => { setSeccion("personajes")}}>Personajes</button></li>
            <li><button onClick={ () => { setSeccion("ubicaciones")}}>Ubicaciones</button></li>
            <li><button onClick={ () => { setSeccion("episodios")}}>Episodios</button></li>
          </ul>
        </nav>
      </header>

      <div className="Content">
        {seccion == "personajes" && <Personajes />}
        {seccion == "ubicaciones" && <Ubicaciones />}
        {seccion == "episodios" && <Episodios />} 
      </div>


    </main>
  )
}

export default App
