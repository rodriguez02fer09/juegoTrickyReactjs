import '../index.scss'
import SelectPlayer from '../../components/selectPlayer'
import ComponentLetters from '../../../../common/components/component-letters'
import ContainPickPlayers from '../../components/contain-pick-players'
import Button from '../../../../common/components/button'
import {TrickyContext} from '../../../../Context'
import {useContext, useEffect} from 'react'

const ContainSelectPlayer = ({type, label}) => {
  const {statePlayers, selecPlayer} = useContext(TrickyContext)

  return <SelectPlayer type={type} label={label} players={statePlayers} />
}

export default ContainSelectPlayer
