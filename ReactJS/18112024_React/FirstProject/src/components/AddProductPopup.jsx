import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function AddProductPopup({ product = [], addProduct }) {
    const url = 'http://localhost:3001/products';

    return (
        <>
            <Popup
                trigger={
                    <button className="btn btn-primary btn-outline m-4">
                        Ajouter un produit
                    </button>
                }
                position="bottom end"
                contentStyle={{
                    width: '700px',
                    height: '200px',
                    padding: '20px',
                    backgroundColor: '#121c22',
                    textAlign: 'center',
                }}
            >
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
                        className="btn btn-outline btn-accent p-4"
                    >
                        Ajouter le produit
                    </button>
                </form>
            </Popup>
        </>
    );
}
