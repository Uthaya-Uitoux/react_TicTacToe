import Player from './components/Player'
import GameBoard from './components/Gameboard'
import './App.css'

function App() {
  return <main>
  <div id="game-container">
  
  <ol id="players">
   <Player initialName="Player 1" symbol ="X"/>
   <Player initialName="Player 2" symbol ="O"/>
    </ol>
   <GameBoard />
  </div>

  LOG
  </main>
}
 
export default App
