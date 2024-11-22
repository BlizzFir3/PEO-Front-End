import ProductCard from "./ProductCard";

export default function ProductList({products}) {
    return (
        <>
            <section className="grid w-full grid-cols-4 gap-4">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </section>
        </>
    );
}
