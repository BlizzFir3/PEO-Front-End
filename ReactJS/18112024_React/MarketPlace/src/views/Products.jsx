import { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import Titre from '../components/Titre';
import { useAxios } from '../hooks/useAxios';
import { Pagination } from '../components/Pagination';

export default function Products() {
    const [products, setProducts] = useState([]);

    const { getPaginate, setPage, setPerPage, page, perPage } = useAxios();

    const [responseObject, setResponseObject] = useState({ page: 0, items: 0 });

    useEffect(() => {
        getPaginate()
            .then((response) => {
                setResponseObject({pages: response.pages, items: response.items});
                setProducts(response.data);
            })
            .catch((error) => console.error(error.message));
    }, [page, perPage]);

    const clickOnPaginationButton = (number) => {
        setPage(number);
    };

    return (
        <>
            <section className="w-full">
                <Titre>Mes Produits</Titre>
                <ProductList products={products} />
                <section className="m-auto my-5 w-fit">
                    <Pagination
                        nbrButton={responseObject.pages}
                        clickOnPaginationButton={clickOnPaginationButton}
                    />
                </section>
            </section>
        </>
    );
}
