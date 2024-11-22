import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
    const navigate = useNavigate();

    const navigateToDetail = () => {
        navigate(`/products/${product.id}`);
    };

    return (
        <>
            <section className="flex shadow-xl card bg-base-100 w-96 p-4">
                <figure>
                    <section className="h-40">
                        <img src={product.image} alt={product.title} />
                    </section>
                </figure>
                <section className="card-body">
                    <h2 className="card-title">{product.title}</h2>
                    <p>{product.category}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                </section>
                <section className="m-auto w-fit">
                    <button
                        className="mb-5 btn btn-accent btn-outline"
                        onClick={navigateToDetail}
                    >
                        Voir
                    </button>
                </section>
            </section>
        </>
    );
}
