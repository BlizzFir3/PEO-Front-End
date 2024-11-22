export default function ProductCard({ product }) {
    return (
        <>
            <section>
                <section className="flex shadow-xl card bg-base-100 w-96">
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
                </section>
            </section>
        </>
    );
}
