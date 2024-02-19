import '../index.scss'
import SelectPlayer from '../../components/selectPlayer'
import ComponentLetters from '../../../../common/components/component-letters'
import {useSelector, useDispatch} from 'react-redux'

import Button from '../../../../common/components/button'

const ContainSelectPlayer = ({type, label}) => {
  const currentPlayer = useSelector(state => {
    return state.players
  })

  const dispatch = useDispatch()

  const handleSelect = playerValue => {
    dispatch(selectPlayer(playerValue))
  }

  return (
    <SelectPlayer
      type={type}
      label={label}
      players={currentPlayer}
      onhandleChange={handleSelect}
    />
  )
}

export default ContainSelectPlayer
