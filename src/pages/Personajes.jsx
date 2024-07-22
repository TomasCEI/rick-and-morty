import {useState, useEffect} from 'react';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [info, setInfo] = useState({
        count: 0,
        next: null,
        prev: null,
        pages: 0
    });

    useEffect(()=> {
        getPersonajes("https://rickandmortyapi.com/api/character"); // utilizando async/await
        console.log("[Personajes.jsx] cargando datos");
    }, []); // al estar vacío únicamente se ejecuta en componentDidMount

    const getPersonajes = async (url) => {

        try {

            // const url ="https://rickandmortyapi.com/api/character";
            const respuesta = await fetch( url );
            // console.log("[Personajes.jsx] Respuesta vale:", respuesta);
    
            const objeto = await respuesta.json();

            console.log("[Personajes.jsx] Result de Get es: ", objeto);
    
            setPersonajes(objeto.results);
            setInfo(objeto.info);


        } catch (error){
            // tuve un error
        }

    }

    return ( 
        <section>
            <h3>Personajes ({info.count})</h3>

            <div className="flexBetween">
                <button disabled={!info.prev} onClick={ ()=> { getPersonajes(info.prev)  } }  >Ant</button>
                <div className="flexCenter">
                    {info.count}
                </div>
                <button disabled={!info.next} onClick={ ()=> { getPersonajes(info.next)  } }  >Sig</button>
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
        </article>
    )
}
 
export default Personajes;