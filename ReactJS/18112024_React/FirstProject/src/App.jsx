import { Fragment } from 'react';
import './App.css';

function App() {
    let user = { name: 'John', email: 'john@gmail.com' };
    let user2 = undefined;
    let salut = 'Salut !';
    let title =
        'Bonjour <strong>Tout le monde</strong> Bienvenu sur notre appli';
    const imgSrc = '../src/assets/react.svg';
    const style = { color: 'blue', backgroundColor: 'white' };

    const display = () => {
        if (user) {
            return <p>{user.name}</p>;
        } else return <p>Utilisateur non trouvé</p>;
    };

    function handleClick(e) {
        console.log(e);
        alert("J'ai clique !");
    }

    const fruits = ['banane', 'pomme', 'abricot', 'poire'];

    return (
        <>
            <p>{salut}</p>
            <p>Salut une deuxieme fois !</p>
            // En jsx les balises sont automatiquement echappees // Deconseille,
            a utiliser dans des cas particuliers
            <h1>{title}</h1>
            <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
            <section>
                <img src={imgSrc} alt="" />
            </section>
            <section style={style}>
                <p>Je suis la div avec le style</p>
            </section>
            <h2>Utilisateur : {display()}</h2>
            {/* Affiche nom si vrai sinon Undefined */}
            {user2 ? <h2>{user2.name}</h2> : <h2>Undefined</h2>}
            {/* Affiche si vrai sinon affiche rien */}
            {user2 && <h2>{user2.name}</h2>}
            <button onClick={handleClick}>Cliquez !</button>
            <button onClick={() => alert("J'ai encore cliquer")}>
                Cliquez encore !
            </button>
            <ul>
                {fruits.map((fruit) => (
                    <li key={fruit}>{fruit}</li>
                ))}
            </ul>
        </>
    );
}

export default App;

