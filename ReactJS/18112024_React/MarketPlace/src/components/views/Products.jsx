import { useEffect, useState } from "react";
import ProductList from "../ProductList";
import Titre from "../Titre";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {},[]);

    return (
        <>
            <Titre>Mes Produits</Titre>
            <ProductList products={products} />
        </>
    );
}
