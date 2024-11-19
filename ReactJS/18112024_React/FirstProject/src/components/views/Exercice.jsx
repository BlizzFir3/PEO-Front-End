import Consigne from '../Consigne';
import { useState } from 'react';

function Exercice() {
	// Objet de produits
    const products = [
        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' },
    ];

    // Filtrage des aliments par category ainsi que number (en stock ou non)
    let fruitsInStock = products.filter((fruit) => {
        return fruit.category === 'Fruits' && fruit.number !== 0;
    });
    let fruits = products.filter((fruit) => {
        return fruit.category === 'Fruits';
    });

    let vegetables = products.filter((fruit) => {
        return fruit.category === 'Vegetables';
    });
    let vegetablesInStock = products.filter((fruit) => {
        return fruit.category === 'Vegetables' && fruit.number !== 0;
    });

    // Pour masquer les products non disponibles
    const [checkedFruit, setCheckedFruit] = useState(false);
    const [checkedVegetable, setCheckedVegetable] = useState(false);

    // Pour la recherche par nom
    const [nameFruit, setNameFruit] = useState('');
    const [nameVegetable, setNameVegetable] = useState('');

    const handleSearchFruit = (e) => {
        setNameFruit(e.target.value);
    };
    const handleSearchVegetable = (e) => {
        setNameVegetable(e.target.value);
    };

	// Filtrage par nom (si character contenue dans le nom ca affiche)
    let vegetablesByName = vegetables.filter((vegetable) => {
        return vegetable.name
            .toLowerCase()
            .includes(nameVegetable.toLowerCase());
    });
    let fruitsByName = fruits.filter((fruit) => {
        return fruit.name.toLowerCase().includes(nameFruit.toLowerCase());
    });

	// Si la case est cocher on affiche uniquement les produit disponible en fonction du tableau
    function isCheckedFruit() {
        if (checkedFruit) {
            return <FruitOuLegumes data={fruitsInStock} />;
        } else {
            return <FruitOuLegumes data={fruits} />;
        }
    }

    function isCheckedVegetable() {
        if (checkedVegetable) {
            return <FruitOuLegumes data={vegetablesInStock} />;
        } else {
            return <FruitOuLegumes data={vegetables} />;
        }
    }

    return (
        <>
            <h1 className="pt-20">Exercice</h1>
            <Consigne />
            <h2 className="pt-10">Fruits</h2>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Rechercher un fruit"
                    value={nameFruit}
                    onChange={handleSearchFruit}
                    className="input input-bordered w-24 md:w-auto"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                        </tr>
                    </thead>
                    {nameFruit ? (
                        <FruitOuLegumes data={fruitsByName} />
                    ) : (
                        isCheckedFruit()
                    )}
                </table>
            </div>
            <div className="p-10">
                <p>Masquer les fruits non disponible : </p>
                <CheckBoxFruit
                    checked={checkedFruit}
                    onCheck={setCheckedFruit}
                />
            </div>
            <h2>Legumes</h2>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Rechercher un legume"
                    value={nameVegetable}
                    onChange={handleSearchVegetable}
                    className="input input-bordered w-24 md:w-auto"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                        </tr>
                    </thead>
                    {nameVegetable ? (
                        <FruitOuLegumes data={vegetablesByName} />
                    ) : (
                        isCheckedVegetable()
                    )}
                </table>
            </div>
            <div className="p-10">
                <p>Masquer les legumes non disponible :</p>
                <CheckBoxVegetable
                    checked={checkedVegetable}
                    onCheck={setCheckedVegetable}
                />
            </div>
        </>
    );
}

const FruitOuLegumes = ({ data }) => {
    return data.map((produit) => (
        <tbody>
            <tr>
                <td>{produit.name}</td>
                <td>{produit.price}</td>
                <td>{produit.number}</td>
            </tr>
        </tbody>
    ));
};

const CheckBoxFruit = ({ checked, onCheck }) => {
    const handleClick = (e) => {
        onCheck(e.target.checked);
    };

    return (
        <>
            <input type="checkbox" onChange={handleClick} checked={checked} />
        </>
    );
};

const CheckBoxVegetable = ({ checked, onCheck }) => {
    const handleClick = (e) => {
        onCheck(e.target.checked);
    };

    return (
        <>
            <input type="checkbox" onChange={handleClick} checked={checked} />
        </>
    );
};

export default Exercice;
