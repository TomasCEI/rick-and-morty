# rick-and-morty
Consulta al API de Rick and Morty con REACT


<!-- API KEY DE VideoJuegos
0cdc4c83299a45cda7fac2232727c36f


https://api.rawg.io/api/games?key=0cdc4c83299a45cda7fac2232727c36f&dates=2019-09-01,2019-09-30&platforms=18,1,7

const databaseData= {......}
const listaJuegos = databaseData.results;

listaJuegos.map((juego)=> {
    {  <p>{juego.name}</p>}
})

databaseData.results[0].name // Borderlands 3


https://api.rawg.io
                    /api
                    /games
                        ? key=0cdc4c83299a45cda7fac2232727c36f
                          & dates=2019-09-01,2019-09-30
                          & platforms=18,1,7 -->

En esta actividad, vamos a explorar la API de Rick and Morty (https://rickandmortyapi.com/) para crear una aplicación web utilizando React. La API ofrece tres categorías principales: Personajes, Lugares y Episodios.
1. Para comenzar, visita la web de la API de Rick and Morty (https://rickandmortyapi.com/) para entender cómo está estructurada la API y qué datos proporciona en cada categoría. Examina los endpoints disponibles y la estructura de los datos.
2. Crea un nuevo proyecto de React y configura tu entorno de desarrollo. Asegúrate de tener instaladas las herramientas necesarias, como Node.js y npm.
3. Crea una interfaz de usuario para tu aplicación con al menos tres secciones: una para Personajes, otra para Lugares y otra para Episodios. Incluye un menú de navegación y utiliza componentes de React para cada sección.
4. Utiliza fetch para consultar la API de Rick and Morty desde tu aplicación React. Realiza solicitudes para obtener datos de cada categoría (Personajes, Lugares y Episodios) y muestra la respuesta en tu interfaz de usuario.
5. Implementa botones de paginación "anterior" y "siguiente" para cada sección, de manera que los usuarios puedan navegar entre las páginas de resultados. Gestiona la lógica de paginación en tu aplicación.
6. Añade botones de filtro para la sección de Personajes que permitan al usuario ver solo personajes humanos, solo personajes alienígenas o todos los personajes. Implementa la lógica necesaria para aplicar los filtros correctamente.
7. Para la sección de Personajes, muestra la imagen de cada personaje junto con su nombre y otra información que creas relevante proveniente de la API. Utiliza las imágenes proporcionadas por la API.
8. Muestra la cantidad total de elementos en cada sección (Personajes, Lugares y Episodios) y la página actual en relación con el número total de páginas disponibles.
9. Agrega estilos CSS para mejorar la apariencia de tu aplicación. Utiliza CSS para darle un aspecto atractivo y profesional a tu aplicación.
10. Demuestra tu conocimiento de Diseño Web para que tu sitio sea responsive (mobile + escritorio).