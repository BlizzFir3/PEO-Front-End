import { useState } from "react";

function Formulaire() {
    const [name, setName] = useState('');

    const handleNameChanged = (e) => {
        setName(e.target.value);
    };

    return (
        <>
            <h1>Les Formulaires</h1>
            <h2>Les champs controlés</h2>
            <p>
                En React, nous avons un concept que nous pouvons appeler les
                'Champs controlés'. En utilisant le
                <strong> 'onChange' </strong> d'une input et le hook useState()
                nous pouvons mettre a jour une variable a chaque changement de
                la valeur de la valeur presente dans l'input
            </p>
            <section className="p-5 mt-5 border w-fit">
                <p>Bonjour, {name}</p>
                <input
                    className="input-bordered"
                    type="text"
                    value={name}
                    onChange={handleNameChanged}
                />
            </section>
        </>
    );
}

export default Formulaire;
