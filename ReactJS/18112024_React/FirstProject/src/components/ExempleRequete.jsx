import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ExempleRequete() {
    const url = 'http://localhost:3001/products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = () => {
            axios
                .get(url)
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error(error.message);
                })
                .finally(() => {
                    console.log('requete terminer');
                });
		};
		fetchData();
    }, []);

    return (
        <>
            <section>
                <h2>Exemple avec notre JSON Server</h2>
                <section className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prix</th>
                                <th scope="col">Quantite</th>
                                <th scope="col">Categorie</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.number}</td>
                                    <td>{product.category}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            </section>
            {/* Contenu de votre composant */}
        </>
    );
}
