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

    const addProduct = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const newProduct = {
            category: formData.get('category'),
            name: formData.get('name'),
            price: formData.get('price'),
            number: formData.get('number'),
        };

        axios
            .post(url, newProduct)
            // Sur notre serveur json (c'est generalement le cas sur les serveurs backend)
            // axios retournera en reponse le nouveau produit que l'on viens de creer
            .then((response) => setProducts((prev) => [...prev, response.data]))
            .catch((error) => console.log(error.message));
    };

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
                <h2 className="p-3">Formulaire</h2>
                {/* Section Formulaire */}
                <section className="m-2 p-4 border-primary border">
                    <form onSubmit={addProduct}>
                        <section className="grid grid-cols-4 mb-5 gap-5">
                            <input
                                type="text"
                                placeholder="Nom du Produit"
                                name="name"
                                className="flex input input-bordered w-24 md:w-auto"
                            />
                            <input
                                type="number"
                                placeholder="Prix"
                                name="price"
                                className="flex input input-bordered w-24 md:w-auto"
                            />
                            <input
                                type="number"
                                placeholder="Quantite"
                                name="number"
                                className="flex input input-bordered w-24 md:w-auto"
                            />
                            <input
                                type="text"
                                placeholder="Categorie"
                                name="category"
                                className="flex input input-bordered w-24 md:w-auto"
                            />
                        </section>
                        <button
                            type="submit"
                            className="btn btn-outline btn-secondary p-4"
                        >
                            Ajouter
                        </button>
                    </form>
                </section>
            </section>
            {/* Contenu de votre composant */}
        </>
    );
}
