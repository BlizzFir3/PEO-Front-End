import { useState } from 'react';

function Flux() {
    const data = [
        { id: 1, nom: 'Produit 1', prix: 20.99, quantite: 5 },
        { id: 2, nom: 'Produit 2', prix: 15.45, quantite: 10 },
        { id: 3, nom: 'Produit 3', prix: 75.32, quantite: 58 },
        { id: 4, nom: 'Produit 4', prix: 30.0, quantite: 25 },
        { id: 5, nom: 'Produit 5', prix: 26.0, quantite: 16 },
    ];

    const [checked, setChecked] = useState(false);

    return (
        <>
            <h1 className="pt-20">Les flux de donnees</h1>
            <h2>De parents vers enfants</h2>
            <p>
                Pour faire passer des donnees d'un composant parent vers le
                composant enfant, nous devons utiliser les props
            </p>
            <ComposantEnfant data={data} />
            <h2>De l'enfant vers le parent</h2>
            <p>
                En React, pour faire passer des donnees d'un composant enfant
                vers son parent, il est courant d'utiliser des fonctions de
                rappel (callbacks) passes en tant que porps. On les utilise
                ensuite dans le composant enfant pour transmettre des donnees
                vers son parent.
            </p>
            <CheckBoxEnfant checked={checked} onCheck={setChecked} />
            {checked ? 'case cochee' : 'case non cochee'}
        </>
    );
}

const ComposantEnfant = ({ data }) => {
    return data.map((produit) => (
        <div key={produit.id}>
            <p>nom : {produit.nom}</p>
            <p>prix : {produit.prix}</p>
            <p>quantite : {produit.quantite}</p>
        </div>
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

export default Flux;
