import ExempleRequete from "../ExempleRequete";

export default function RequeteAPI() {
    return (
        <>
            <h1 className="pt-20">Les requetes HTTP</h1>
            <h2>Rappel</h2>
            <p>
                <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods">
                    {' '}
                    Doc Mozilla
                </a>
            </p>
            <strong>En resume: </strong>
            <ul>
                <li>
                    <strong>GET: </strong> sert a recuperer les donnees
                </li>
                <li>
                    <strong>POST: </strong> Utiliser avec un 'body', tres
                    souvent en JSON (ou xml sur ancienne appli). Par exemple: le
                    'post' sera tres utilise pour des 'create', en envoyant le
                    nouvel objet a creer dans le corp de la requetes HTTP
                </li>
                <li>
                    <strong>PUT: </strong> Meme logique que le POST a la
                    difference que le 'put' est utiliser pour mettre a jour une
                    ressource existante
                </li>
                <li>
                    <strong>DELETE: </strong> Utiliser pour supprimer une
                    ressource
                </li>
            </ul>

            <h2>Les requetes avec la biblioteque 'Axios'</h2>
            <a
                className="underline"
                href="https://axios-http.com/fr/docs/example"
            >
                documentation axios
            </a>

            <h2>Adresses de notre json server: </h2>
            <ul>
                <li>
                    <strong>GET: </strong> http://localhost:3001/products
                </li>
                <li>
                    <strong>POST: </strong> http://localhost:3001/products
                </li>
                <li>
                    <strong>PUT: </strong> http://localhost:3001/products/id
                </li>
                <li>
                    <strong>DELETE: </strong> http://localhost:3001/products/id
                </li>
			</ul>
			<ExempleRequete />
        </>
    );
}
