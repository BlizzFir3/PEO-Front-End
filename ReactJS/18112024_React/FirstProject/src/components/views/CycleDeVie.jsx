import { useEffect, useState } from 'react';

export default function CycleDeVie() {
    const [count, setCount] = useState(0);

    console.log('test');

    useEffect(() => {
        console.log('Composant monté');

        return () => {
            console.log('return du useEffect');
        };
    }, [count]);

    return (
        <>
            <h1 className="p-20">Cycle de Vie</h1>
            <p>{count}</p>
            <button
                className="p-4 btn btn-outline btn-secondary p-4 m-2"
                onClick={() => setCount((prev) => prev + 1)}
            >
                Incrementer
            </button>
        </>
    );
}
