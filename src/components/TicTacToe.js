import React, { useState } from 'react';

const TicTacToe = ({ toggleGame }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameMode, setGameMode] = useState(null); // null, 'player', 'computer'
    const [isGameActive, setIsGameActive] = useState(false);

    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);

        if (gameMode === 'computer' && !calculateWinner(newSquares) && !newSquares.every(Boolean)) {
            setTimeout(() => {
                const emptyIndices = newSquares.map((val, index) => val === null ? index : null).filter(val => val !== null);
                const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
                newSquares[randomIndex] = 'O';
                setSquares(newSquares);
                setXIsNext(true);
            }, 500);
        }
    };

    const renderSquare = (i) => {
        return (
            <button className="square" onClick={() => handleClick(i)}>
                {squares[i]}
            </button>
        );
    };

    const winner = calculateWinner(squares);
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

    const startGame = (mode) => {
        setGameMode(mode);
        setIsGameActive(true);
        setSquares(Array(9).fill(null));
        setXIsNext(true);
    };

    return (
        <div className="form-modal">
            <div className="form-modal-content">
                <div className="d-flex justify-content-end">
                    <button className="btn btn-danger close" onClick={toggleGame}><span>&times;</span></button>
                </div>
                <div className="container mt-2">
                    <h2 className="mx-3"><i className="fa-solid fa-gamepad mx-3"></i>Tic Tac Toe</h2>
                    <hr />
                    {!isGameActive ? (
                        <div className="row justify-content-center mb-4">
                            <div className="col-12 col-md-5 position-relative game-option">
                                <i className="fas fa-desktop fa-5x icon-background"></i>
                                <button className="btn btn-outline-secondary w-100 h-100" onClick={() => startGame('computer')}>
                                    Vs Computer
                                </button>
                            </div>
                            <div className="col-12 col-md-5 position-relative game-option">
                                <i className="fas fa-user-friends fa-5x icon-background"></i>
                                <button className="btn btn-outline-secondary w-100 h-100" onClick={() => startGame('player')}>
                                    Vs Player
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="status mx-5">{status}</div>
                            <div className="container d-flex justify-content-center mt-1">
                                <table className="board-table">
                                    <tbody>
                                        <tr>
                                            <td>{renderSquare(0)}</td>
                                            <td>{renderSquare(1)}</td>
                                            <td>{renderSquare(2)}</td>
                                        </tr>
                                        <tr>
                                            <td>{renderSquare(3)}</td>
                                            <td>{renderSquare(4)}</td>
                                            <td>{renderSquare(5)}</td>
                                        </tr>
                                        <tr>
                                            <td>{renderSquare(6)}</td>
                                            <td>{renderSquare(7)}</td>
                                            <td>{renderSquare(8)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

// Helper function to determine the winner
const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default TicTacToe;
