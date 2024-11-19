import '../TicTacToe.css';
import { useState } from 'react';

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    );
}

function Square() {
    function handleClick() {
        setValue('X')
    }

	const [value, setValue] = useState(null);

    return <button className="square color-ant-w" onClick={handleClick}>{value}</button>;
}
