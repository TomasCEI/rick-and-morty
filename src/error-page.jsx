import { Link, useRouteError } from "react-router-dom";

import Layout from './Layout.jsx'

export default function ErrorPage() {
  
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Tuvimos un error, página no encontrada!</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">Volver al Home</Link>
      </div>
    </Layout>
  );
}