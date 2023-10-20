import '../styles/desktop.scss'
import PlayerTurn from '../../player-turn/src/PlayerTurn'
import ButtonRestart from '../../button-restart/src/ButtonRestart'
import ComponentLetters from '../../../../../common/components/component-letters/src/ComponentLetters'

const ContainRestartTurn = ({value, size, player, players}) => {
  const defaulClass = 'contain-restart-turn'
  return (
    <div className={`${defaulClass}`}>
      <ButtonRestart />
      <PlayerTurn value="x" />
      <div className={`${defaulClass} ${defaulClass}__letters`}>
        {players.map(({value}) => {
          return <ComponentLetters value={value} size="mediun" />
        })}
      </div>
    </div>
  )
}
export default ContainRestartTurn
