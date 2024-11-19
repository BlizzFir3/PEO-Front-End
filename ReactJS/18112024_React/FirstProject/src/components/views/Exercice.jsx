import Consigne from '../Consigne';
import { useState } from 'react';

function Exercice() {
    const products = [
        { category: 'Fruits', price: '$1', number: 0, name: 'Banana' },
        { category: 'Fruits', price: '$1', number: 2, name: 'Mango' },
        { category: 'Fruits', price: '$2', number: 0, name: 'Pineapple' },
        { category: 'Vegetables', price: '$2', number: 4, name: 'Broccoli' },
        { category: 'Vegetables', price: '$4', number: 0, name: 'Carrot' },
        { category: 'Vegetables', price: '$1', number: 6, name: 'Zucchini' },
    ];

    let fruits = products.filter((fruit) => {
        return fruit.category === 'Fruits';
    });

    let vegetables = products.filter((fruit) => {
        return fruit.category === 'Vegetables';
    });

    const [checked, setChecked] = useState(false);

    return (
        <>
            <h1 className="pt-20">Exercice</h1>
            <Consigne />
            <h2 className='pt-10'>Fruits</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                        </tr>
                    </thead>
                    <FruitOuLegumes data={fruits} />
                </table>
            </div>
            <div className="p-10">
                <CheckBoxEnfant checked={checked} onCheck={setChecked} />
                {checked
                    ? 'Afficher les produits non disponible'
                    : 'Ne pas afficher les produits non disponible'}
            </div>
            <h2>Vegetables</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th scope="col">Nom</th>
                            <th scope="col">Prix</th>
                            <th scope="col">Quantité</th>
                        </tr>
                    </thead>
                    <FruitOuLegumes data={vegetables} />
                </table>
            </div>
                <div className="p-10">
                    <CheckBoxEnfant checked={checked} onCheck={setChecked} />
                    {checked
                        ? 'Afficher les produits non disponible'
                        : 'Ne pas afficher les produits non disponible'}
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

const CheckBoxEnfant = ({ checked, onCheck }) => {
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
