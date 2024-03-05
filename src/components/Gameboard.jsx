import React, {useState} from 'react'


const GameBoard = () => {
    const initGameValues = [
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ]
    const [playerCount, setPlayerCount] = useState(0)
    const [initialGameBoard, setInitialGameBoard] = useState(initGameValues);
    const handleBoard =(rowIndex, colIndex)=>{
        setInitialGameBoard((prevGameBoard)=>{
            //console.log('Prev Game Board=> ', prevGameBoard)
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updateBoard[rowIndex][colIndex] = (playerCount % 2) === 0 ? 'X' : 'O';
            return updateBoard;
        })
        setPlayerCount((prevCount)=>{
            const updateCount = prevCount + 1;
            return updateCount
        })
    }
    return (
        <ul id="game-board">
            {initialGameBoard.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ul className="game-item">
                    {row.map((playerSymbol,colIndex)=> (
                        <li key={colIndex}>
                            <button onClick ={()=>handleBoard(rowIndex, colIndex)}>{playerSymbol ? playerSymbol : '-'}</button>
                        </li>
                    ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

export default GameBoard

