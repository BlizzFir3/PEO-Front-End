import { useState } from 'react';

export const useIncrement = ({
    initialValue = 0,
    max = Infinity,
    min = -Infinity,
}) => {
    const [count, setCount] = useState(initialValue);

    const increment = () =>
        setCount((prevCount) => (prevCount < max ? prevCount + 1 : prevCount));
    const decrement = () =>
        setCount((prevCount) => (prevCount > min ? prevCount - 1 : prevCount));

    return [count, increment, decrement];
};
