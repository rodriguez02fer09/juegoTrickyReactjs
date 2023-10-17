import '../index.scss'
import ComponentLetters from '../../../../common/components/component-letters'
import ContainPickPlayers from '../../components/contain-pick-players'
import Button from '../../../../common/components/button'

const ContainSelectPlayer = ({players, type, label}) => {
  return (
    <div className="contain-select-player">
      <div className="contain-letters">
        {players.map(({value}) => {
          return <ComponentLetters value={value} size="mediun" />
        })}
      </div>
      <ContainPickPlayers players={players} />
      <Button type={'large-yellow'} label={'NEW GAME (VS CPU)'} />
      <Button type={'large-blue'} label={'NEW GAME (VS PLAYER)'} />
    </div>
  )
}

export default ContainSelectPlayer
