import { useEffect, useState } from 'react';
import ProductList from '../ProductList';
import Titre from '../Titre';
import { useAxios } from '../../hooks/useAxios';

export default function Products() {
    const [products, setProducts] = useState([]);

    const { get } = useAxios();

    useEffect(() => {
        get()
            .then((response) => {
                setProducts(response);
            })
            .catch((error) => console.error(error.message));
    }, []);

    return (
        <>
            <section className="w-full">
                <Titre>Mes Produits</Titre>
                <ProductList products={products} />
            </section>
        </>
    );
}
