Instalación de React-Router 6
```bash
npm install react-router-dom
```


Para usarlo, primero englobamos nuestra app con la etiquet `<Router>`

```jsx
// imports
import { BrowserRouter as Router, Route, Link, Routes, NavLink, useParams } from 'react-router-dom';



        // reemplazamos nuestra navegación anterior

        <nav>
            <ul>
              {/* <li><button onClick={()=>setSeccion("personajes")}>Personajes</button></li>
              <li><button onClick={()=>setSeccion("ubicaciones")}>Ubicaciones</button></li>
              <li><button onClick={()=>setSeccion("episodios")}>Episodios</button></li> */}
              
              {/* Link no posee "active" por lo que usamos NavLink */}
              <li><Link  to="/personajes" className="Button-Link">Personajes</Link ></li>
              <li><Link  to="/ubicaciones" className="Button-Link">Ubicaciones</Link ></li>
              <li><Link  to="/episodios" className="Button-Link">Episodios</Link ></li>

              <li><NavLink  to="/personajes" className="Button-Link">Personajes</NavLink ></li>
              <li><NavLink  to="/ubicaciones" className="Button-Link">Ubicaciones</NavLink ></li>
              <li><NavLink  to="/episodios" className="Button-Link">Episodios</NavLink ></li>

 

            </ul>
          </nav>

        // reemplazamos nuestro Content
        <main className="Content">
      
          {/* 
          {seccion == "personajes" && <Personajes />}
          {seccion == "ubicaciones" && <Ubicaciones />}
          {seccion == "episodios" && <Episodios />}  
          */}
      
          <Routes>
            <Route path="/personajes" element={<Personajes />} />
            <Route path="/ubicaciones" element={<Ubicaciones />} />
            <Route path="/episodios" element={<Episodios />} />
            <Route path="/" element={<Personajes />} />
          </Routes>
        </main>
```