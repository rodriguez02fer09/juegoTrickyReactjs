import '../styles/desktop.scss'

const ScoreGame = ({color, playerScore, score}) => {
  const scoreClassName = 'score-game'
  return (
    <div className={`${scoreClassName} ${scoreClassName}--${color}`}>
      <p>{playerScore}</p>
      <p>{score}</p>
    </div>
  )
}

export default ScoreGame
