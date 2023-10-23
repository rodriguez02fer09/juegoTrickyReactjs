import '../styles/desktop.scss'
import ScoreGame from '../../score-game'

const ContainScoreGame = ({color, playerScore, score}) => {
  const containScoreClass = 'Contain-score-game'
  return (
    <div className={`${containScoreClass}`}>
      <ScoreGame color={'blue'} playerScore={'X (YOU)'} score={'0'} />
      <ScoreGame color={'yellow'} playerScore={'TIES'} score={'0'} />
      <ScoreGame color={'gray'} playerScore={'O (CPU)'} score={'0'} />
    </div>
  )
}

export default ContainScoreGame
