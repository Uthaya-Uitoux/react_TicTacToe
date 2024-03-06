import { useState } from "react";


const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleBoard =(rowIndex, colIndex)=>{
        setGameBoard((prevGameBoard)=>{
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            //console.log('activePlayerSymbol => ', activePlayerSymbol)
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        })
    
        onSelectSquare();
    }
    return (
        <ul id="game-board">
            {gameBoard.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ul className="game-item">
                    {row.map((playerSymbol,colIndex)=> (
                        <li key={colIndex}>
                            <button onClick ={()=>handleBoard(rowIndex, colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

