import { useState } from 'react';

/**
 * This function demonstrates the usage of the useState hook in a React component.
 * It maintains a count state and provides an increment function to update the count.
 *
 * @returns {JSX.Element} - A React component that displays the current count and a button to increment it.
 */
function HookUseState() {
    const [count, setCount] = useState(0);

    /**
     * Increments the count state by 1 and logs the current count to the console.
     */
    const increment = () => {
        // setCount(count + 1);
        // Les deux font la meme chose mais plus propre avec prevValue
        setCount((prevValue) => prevValue + 1);
        // console.log(count);
    };

    return (
        <>
            <h1>Le hook useState</h1>
            <p>{count}</p>
            <button className="btn btn-outline btn-primary" onClick={increment}>
                {' '}
                +{' '}
            </button>
            <button
                className="btn btn-outline btn-secondary"
                onClick={() => setCount((prevValue) => prevValue - 1)}
            >
                -
            </button>
        </>
    );
}

export default HookUseState;
