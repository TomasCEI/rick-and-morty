import {useState, useEffect} from 'react';

import { useParams, Link } from 'react-router-dom';

const Personaje = () => {
    const [personaje, setPersonaje] = useState({});
    const [errorData, setErrorData] = useState("");

    //const personajeId =5;
    useEffect(()=> {
        getPersonaje(`https://rickandmortyapi.com/api/character/${personajeId}`); // utilizando async/await
        console.log("[Personaje.jsx] cargando datos del personaje");
    }, []); // al estar vacío únicamente se ejecuta en componentDidMount

    const getPersonaje = async (url) => {

        try {
            const respuesta = await fetch( url );
            const objeto = await respuesta.json();

            console.log("[Personaje.jsx] Info del personaje: ", objeto);
    
            if(objeto.error){
                setErrorData("No se encontro el personaje: "+personajeId);
                setPersonaje([]);
            } else {
                setPersonaje(objeto);
            }

        } catch (error){
            // tuve un error en el Fetch
            console.log("Error en la consulta");
        }

    }

    const { personajeId } = useParams();

    return ( 
        <section>
            <h3>Personaje ({personajeId})</h3>

            <div className="flexGrid">
                {(errorData || !personaje)  
                    ?   <div>
                            {errorData}
                            <hr />    
                            <Link to="/personajes">Volver</Link>
                        </div> 
                    :   <PersonajeCard {...personaje} />
                }
            </div>
        </section>
     );
}

const PersonajeCard = ({name, image, episode=[]}) => {
    
    
    return (
        <article className="Card" style={{width: "500px"}}>
            <img src={image} alt={name} />
            nombre: {name}
            <Link to="/personajes">Volver</Link>


            <h3>Episodios ({episode.length})</h3>
            <ul>
                { episode && episode.map( (ep, index) => 
                    <EpisodioItem key={index} url={ep} />
                )}
            </ul>
        </article>
    )
}


const EpisodioItem = ({url}) => {
    const ep = url.split("/").pop();
    return (
        <li style={{overflow: "hidden"}}>
            {url} <br />
            <Link to={`/episodio/${ep}`}>Episodio {ep}</Link>
        </li>
    )
}
 
export default Personaje;