import { useEffect, useState } from "react";

export default function UseEffect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (count !== 0) {
			console.log("effet secondaire declenche");
			document.title = `Vous avez cliqué ${count} fois`;
		}
	}, [count]); 

    return (
        <>
            <section>
                <h1 className="pt-20">Le Hook Use Effect</h1>
                <ul>
                    <strong>Le hook use effect est utilisé :</strong>
                    <li>Pour gérer des effets secondaires</li>
                    <li>
                        Pour effectuer des opérations après le rendu des
                        composants (comme des appels des API, gestion
                        d'abonnement etc...)
                    </li>
                    <p>
                        Très souvent, on utilise le hook useEffect() en
                        conjonction avec le jook useState().
                    </p>
                    <li></li>
                    <li></li>
                </ul>
                <button
                    className="p-4 btn btn-outline btn-secondary p-4 m-2"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    {count}
                </button>
            </section>
        </>
    );
}
