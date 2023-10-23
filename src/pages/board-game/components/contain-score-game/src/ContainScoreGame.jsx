import '../styles/desktop.scss'
import ScoreGame from '../../score-game'

const ContainScoreGame = ({type, label}) => {
  const containScoreClass = 'Contain-score-game'
  return (
    <div className={`${containScoreClass}`}>
      <ScoreGame type={type} label={label} />
    </div>
  )
}

export default ContainScoreGame
