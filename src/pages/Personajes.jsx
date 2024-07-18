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
        getPersonajes(); // utilizando async/await
        console.log("[Personajes.jsx] cargando datos");
    }, []); // al estar vacío únicamente se ejecuta en componentDidMount

    const getPersonajes = async () => {

        const respuesta = await fetch("https://rickandmortyapi.com/api/character");
        // console.log("[Personajes.jsx] Respuesta vale:", respuesta);

        const objeto = await respuesta.json();
        console.log("[Personajes.jsx] Objeto vale:", objeto);

        setPersonajes(objeto.results);
        setInfo(objeto.info);

    }

    return ( 
        <section>
            <h3>Personajes</h3>

            <div className="flexBetween">
                <button>Ant</button>
                <div className="flexCenter">
                    {info.count}
                </div>
                <button>Sig</button>
            </div>

            <div className="flexGrid">
                {
                    personajes.map( (personaje) => {
                        console.log(personaje);
                        return (
                            <div key={personaje.id}>
                             nombre: {personaje.name}
                            </div>
                        )
                    })

                }
            </div>
           

        </section>
     );
}
 
export default Personajes;