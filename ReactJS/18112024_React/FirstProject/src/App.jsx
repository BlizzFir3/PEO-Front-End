import { Fragment } from "react";
import "./App.css";

function App() {
    let user = { name: "John", email: "john@gmail.com" };
    let user2 = undefined;
    let salut = "Salut !";
    let title =
        "Bonjour <strong>Tout le monde</strong> Bienvenu sur notre appli";
    const imgSrc = "../src/assets/react.svg";
    const style = { color: "blue", backgroundColor: "white" };

    const display = () => {
        if (user === undefined) {
            return <p>Utilisateur non trouvé</p>;
        } else return <p>{user.name}</p>;
    };
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
            {user2 ? <h2>{user2.name}</h2> : <h2>Undefined</h2>}
        </>
    );
}

export default App;
