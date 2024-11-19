import "../TicTacToe.css"

export default function Square() {
    return (
        <>
                <div className="board-row">
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                </div>
                <div className="board-row">
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                </div>
                <div className="board-row">
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                    <button className="square color-ant-w">X</button>
                </div>
        </>
    );
}
