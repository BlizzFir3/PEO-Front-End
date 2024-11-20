import { useIncrement } from '../../hooks/useIncrement';
import { useToggle } from '../../hooks/useToggle';

export default function HookPersonnalise() {
	const [checked, toggleChecked] = useToggle();
	const { count,
		increment: incrementer,
		decrement: decrementer } = useIncrement({ min: -10 });

    return (
        <>
            <h1 className="pt-20">Les hooks personnalisé</h1>
            <p className="pb-2">
                <strong>
                    <a
                        className="link link-accent"
                        href="https://usehooks.com/"
                    >
                        Use Hook
                    </a>
                </strong>
            </p>
            <p className="pb-2">
                <strong>
                    <a
                        className="link link-error"
                        href="https://react.gg/?s=usehooks"
                    >
                        React.gg
                    </a>
                </strong>
            </p>
            <h2>Cas de figure n 1</h2>
            <p>
                Dans une appli react, on peut souvent avoir besoin de faire
                varier une valeur entre vrai et faux (ex: afficher/masquer une
                valeur). Pour cela, on peut mettre en place un hook personnalisé
                (et ainsi factoriser le code)
            </p>
            <input
                className="checkbox checkbox-secondary"
                type="checkbox"
                value={checked}
                onChange={toggleChecked}
            />
            <p>{checked && 'je suis coché'}</p>
            <section>
                <h2>Cas de figure n 2</h2>
                <p>{count}</p>
                <button
                    onClick={incrementer}
                    className="btn btn-primary btn-outline p-4 m-4"
                >
                    +
                </button>
                <button
                    onClick={decrementer}
                    className="btn btn-secondary btn-outline p-4 m-4"
                >
                    -
                </button>
            </section>
        </>
    );
}
