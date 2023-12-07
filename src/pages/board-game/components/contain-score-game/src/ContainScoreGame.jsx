import '../styles/desktop.scss'
import ScoreGame from '../../score-game'

const ContainScoreGame = ({
  color,
  playerScore,
  score,
  playerXWin,
  playerOWin,
}) => {
  const containScoreClass = 'Contain-score-game'
  return (
    <div className={`${containScoreClass}`}>
      <ScoreGame color={'blue'} playerScore={'X (YOU)'} score={playerXWin} />
      <ScoreGame color={'yellow'} playerScore={'TIES'} score={'0'} />
      <ScoreGame color={'gray'} playerScore={'O (CPU)'} score={playerOWin} />
    </div>
  )
}

export default ContainScoreGame
