import {useState, useEffect} from 'react';

import { useParams, Link } from 'react-router-dom';

const Personajes = () => {
    const [personaje, setPersonaje] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });

    useEffect(()=> {
        getPersonaje(`https://rickandmortyapi.com/api/character/${personajeID}`); // utilizando async/await
        console.log("[Personaje.jsx] cargando datos del personaje");
    }, []); // al estar vacío únicamente se ejecuta en componentDidMount

    const getPersonaje = async (url) => {

        try {
            const respuesta = await fetch( url );
            // console.log("[Personaje.jsx] Respuesta vale:", respuesta);
    
            const objeto = await respuesta.json();

            console.log("[Personaje.jsx] Result de Get es: ", objeto);
    
            setPersonaje(objeto.results);
            setInfo(objeto.info);


        } catch (error){
            // tuve un error
        }

    }
    let { personajeId } = useParams();

    return ( 
        <section>
            <h1>Soy un personaje, id : {personajeId} </h1>
            <h3>Personajes ({info.count})</h3>

            <div className="flexBetween">
                <button disabled={!info.prev} onClick={ ()=> { getPersonaje(info.prev)  } }  >Ant</button>
                <div className="flexCenter">
                    {info.count}
                </div>
                <button disabled={!info.next} onClick={ ()=> { getPersonaje(info.next)  } }  >Sig</button>
            </div>

            <div className="flexGrid">
                {
                    personajes.map( (personaje) => (
                        <PersonajeCard key={personaje.id} {...personaje} />
                    ))
                }
            </div>
        </section>
     );
}

const PersonajeCard = ({name, image, id, status, species, location}) => {
    
    
    return (
        <article className="Card">
            nombre: {name}
            <img src={image} alt={name} />
            <Link to={`/personaje/${id}`}>Ver personaje</Link>

        </article>
    )
}
 
export default Personajes;