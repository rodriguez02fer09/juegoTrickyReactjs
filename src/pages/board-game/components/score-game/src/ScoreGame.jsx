import '../styles/desktop.scss'

const ScoreGame = ({type, label}) => {
  const scoreClassName = 'score-game'
  return (
    <div className={`${scoreClassName} `}>
      <div className={`${scoreClassName} ${scoreClassName}--${type}`}>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}
export default ScoreGame
