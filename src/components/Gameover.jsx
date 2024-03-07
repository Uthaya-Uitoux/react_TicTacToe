export default function GameOver({winner, onRestart}){
return <div id="game-over-overlay">
<div id="game-over-message">

<h2>Game Over!</h2>
{winner && <p>{winner} Won!</p>}
{!winner && <p>It&apos;s a draw</p>}

<p>
<button onClick = {onRestart}>Rematch</button>


</p>
</div>
</div>
}