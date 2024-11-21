import React, { useRef, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function EditPopup({ data, product = [], editProduct }) {
    return (
        <>
            <Popup
                trigger={
                    <button className="btn btn-accent btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-pencil-square"
                            viewBox="0 0 16 16"
                        >
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                            <path
                                fillRule="evenodd"
                                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                            />
                        </svg>
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
                <form onSubmit={editProduct}>
                    <section className="grid grid-cols-4 mb-5 gap-5">
                        <input
                            type="text"
                            defaultValue={data.name}
                            placeholder="Nom du Produit"
                            name="name"
                            className="flex input input-bordered w-24 md:w-auto"
                        />
                        <input
                            type="number"
                            defaultValue={data.price}
                            placeholder="Prix"
                            name="price"
                            className="flex input input-bordered w-24 md:w-auto"
                        />
                        <input
                            type="number"
                            defaultValue={data.number}
                            placeholder="Quantite"
                            name="number"
                            className="flex input input-bordered w-24 md:w-auto"
                        />
                        <input
                            type="text"
                            defaultValue={data.category}
                            placeholder="Categorie"
                            name="category"
                            className="flex input input-bordered w-24 md:w-auto"
                        />
                        <input
                            type="text"
                            disabled
                            defaultValue={data.id}
                            name="id"
                            className="flex input input-bordered w-24 md:w-auto"
                            style={{
                                position: 'absolute',
                                top: '-400000px',
                                left: '10px',
                                cursor: 'pointer',
                            }}
                        />
                    </section>
                    <button
                        type="submit"
                        className="btn btn-outline btn-secondary p-4"
                    >
                        Valider les modifications
                    </button>
                </form>
            </Popup>
        </>
    );
}
