# rick-and-morty
Consulta al API de Rick and Morty con REACT

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


## Configurar para github Pages

1. Instalar gh-pages
```bash
npm install gh-pages --save-dev
bun i gh-pages -D
```

2. Configurar `vite.config.js` agregandole el `base` de tu GitHubPages 

```javascript
{   
    // https://tu-usuario-github.github.io/tu-repositorio
    base: 'https://tomascei.github.io/rick-and-morty'
}
```

3. Crear los scripts de depoloy en `package.json`

```json
{
    "scripts": {
        "predeploy": "bun run build",
        "deploy": "gh-pages -d dist"
    }
}
```

4. Ejecutamos `bun run deploy` para subir los archivos a GitHub Pages. Se creará una nueva branch `gh-pages` con los archivos de la carpeta `dist`

5. Podemos visualizar el progreso de nuestro deploy en la pestaña "Actions" de github.
6. Nota para frameworks como Angular, NextJs etc utilizamos otro método con Github Actions