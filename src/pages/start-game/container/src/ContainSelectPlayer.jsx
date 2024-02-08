import '../index.scss'
import SelectPlayer from '../../components/selectPlayer'
import ComponentLetters from '../../../../common/components/component-letters'
import {useSelector, useDispatch} from 'react-redux'
import {statePlayers} from '../../../../redux/slice'

import Button from '../../../../common/components/button'

const ContainSelectPlayer = ({type, label}) => {
  // const {statePlayers, selecPlayer} = useContext(TrickyContext)
  const currentPlayer = useSelector(state => state.players)
  const dispatch = useDispatch()

  const handleSelect = playerValue => {
    dispatch(selectPlayer(playerValue))
  }

  return (
    <SelectPlayer
      type={type}
      label={label}
      players={statePlayers}
      onhandleChange={handleSelect}
    />
  )
}

export default ContainSelectPlayer
