import { useParams } from 'react-router-dom';
import Titre from '../components/Titre';
import { useAxios } from '../hooks/useAxios';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
    const params = useParams();
    const productId = params.id;

    const { getById } = useAxios();

    const [product, setProduct] = useState({});

    useEffect(() => {
        getById(productId).then((response) => setProduct(response));
    }, []);

    return (
        <>
            <Titre>Détail du produit</Titre>
            <ProductCard product={product}/>
        </>
    );
}
