import axios from 'axios';
import { useEffect, useState } from 'react';
import AddProductPopup from './AddProductPopup';
import EditPopup from './EditPopup';

export default function ArrayData() {
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
            .then((response) => setProducts((prev) => [...prev, response.data]))
            .catch((error) => console.log(error.message));

        // formRef.current.reset();
    };

    function deleteProduct(id) {
        axios
            .delete(url + '/' + id)
            .then(() => {
                console.log('deleted product with id : ' + id);
                setProducts(products.filter((product) => product.id !== id));
            })
            .catch((error) => {
                console.error(error.message);
                console.error('Error deleting product : ' + id);
            });
    }

    function editProduct(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

        const updatedProduct = {
            id: formData.id,
            category: formData.category,
            name: formData.name,
            price: formData.price,
            number: formData.number,
        };
        axios
            .put(url + '/' + updatedProduct.id, updatedProduct)
            .then((response) =>
                console.log('updated product with id : ' + updatedProduct.id)
            )
            .catch((error) => console.log(error.message + ' id =' + updatedProduct.id + ' name: ' + updatedProduct.name + ' price =' + updatedProduct.price));
    }

    return (
        <>
            <AddProductPopup addProduct={addProduct} />
            <section className="overflow-x-auto border-secondary border rounded-btn">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantite</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Modifier</th>
                            <th scope="col">Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.number}</td>
                                <td>{product.category}</td>
                                <td>
                                    <EditPopup
                                        data={product}
                                        editProduct={editProduct}
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-warning btn-outline"
                                        onClick={() =>
                                            deleteProduct(product.id)
                                        }
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-trash-fill"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
            {/* Contenu de votre composant */}
        </>
    );
}
