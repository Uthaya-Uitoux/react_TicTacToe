
export default function GameBoard({onSelectSquare,board}) {

    
    /* const [gameBoard, setGameBoard] = useState(initialGameBoard);

    const handleBoard =(rowIndex, colIndex)=>{
        setGameBoard((prevGameBoard)=>{
            const updateBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            //console.log('activePlayerSymbol => ', activePlayerSymbol)
            updateBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateBoard;
        })
    
        onSelectSquare();
    } */
    return (
        <ul id="game-board">
            {board.map((row,rowIndex) => (
                <li key={rowIndex}>
                    <ul className="game-item">
                    {row.map((playerSymbol,colIndex)=> (
                        <li key={colIndex}>
                            <button onClick ={() => onSelectSquare(rowIndex,colIndex)} disabled = {playerSymbol !== null}>{playerSymbol}</button>
                        </li>
                    ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}

