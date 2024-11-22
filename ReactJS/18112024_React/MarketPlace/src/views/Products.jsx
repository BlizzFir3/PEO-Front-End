import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Titre from '../components/Titre';
import { useAxios } from '../hooks/useAxios';

export default function Products() {
    const [products, setProducts] = useState([]);

    const { getPaginate } = useAxios();

    useEffect(() => {
        getPaginate()
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
