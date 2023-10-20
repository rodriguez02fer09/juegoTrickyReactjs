import '../styles/desktop.scss'
import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
const ContainGameBoard = ({value, size, player, players, playerTurn}) => {
  return (
    <div className="contain-game-board">
      <ContainRestartTurn
        value={value}
        size={size}
        player={player}
        players={players}
        value={value}
        playerTurn={playerTurn}
      />
      <Board />
    </div>
  )
}

export default ContainGameBoard
