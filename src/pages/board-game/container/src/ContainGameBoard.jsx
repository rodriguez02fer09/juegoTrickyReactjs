import '../styles/desktop.scss'
import ContainRestartTurn from '../../components/contain-restart-turn'
import Board from '../../components/board/src/Board'
import ContainScoreGame from '../../components/contain-score-game/src/ContainScoreGame'

const ContainGameBoard = ({
  value,
  size,
  player,
  players,
  playerTurn,
  color,
  text,
  scorePlayers,
}) => {
  return (
    <div className="contain-game-board">
      <ContainRestartTurn
        value={value}
        size={size}
        player={player}
        players={players}
        playerTurn={playerTurn}
      />
      <Board playerTurn={playerTurn} value={value} size={size} />
      <ContainScoreGame color={color} text={text} scorePlayers={scorePlayers} />
    </div>
  )
}

export default ContainGameBoard
