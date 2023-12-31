import '../styles/desktop.scss'
import LetterTurn from '../../letter-turn/src/LetterTurn'
//import ComponentLetters from '../../../../../common/components/component-letters/src/ComponentLetters'

const PlayerTurn = ({value}) => {
  const playerTurnClassName = 'component-player-turn'
  return (
    <div className={`${playerTurnClassName}`}>
      <div className={`${playerTurnClassName}--contain`}>
        <LetterTurn value={value} />
        <p className={`${playerTurnClassName} ${playerTurnClassName}--p`}>
          TURN
        </p>
      </div>
    </div>
  )
}
export default PlayerTurn
