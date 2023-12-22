import React from 'react'
import Button from '../../button/src/Button'
import '../style/desktop.scss' // Importa los estilos
import ComponentLetters from '../../component-letters/src/ComponentLetters'
import {Link} from 'react-router-dom'
import LetterTurn from '../../../../pages/board-game/components/letter-turn/src/LetterTurn'

const ReportGame = ({textReport, takeRound, type, label, value, onClick}) => {
  const defaultReport = 'contain-reportGame'
  const letterReport = 'letter-report'
  const containButton = 'contain-button'
  const containRound = 'contain-textRound'
  const takesRoundClass =
    value === 'x'
      ? `${defaultReport}--${containRound}__yellow`
      : `${defaultReport}--${containRound}__blue`

  return (
    <div className={defaultReport}>
      <div className={`${defaultReport}--${letterReport}`}>
        <p className={`${defaultReport}--${letterReport}__textReport`}>
          {textReport}
        </p>
      </div>

      <div className={`${defaultReport}--${containRound}`}>
        <ComponentLetters value={value === 'x' ? 'o' : 'x'} />
        <p className={`${takesRoundClass}`}>{takeRound}</p>
      </div>

      <div className={`${defaultReport}--${containButton}`}>
        <Link to="/">
          <Button type={'small-gray'} label={'QUIT'} />
        </Link>
        <Button
          onClick={() => {
            console.log('click')
            onClick()
          }}
          type={'small-yellow'}
          label={'NEXT ROUND'}
        />
      </div>
    </div>
  )
}

export default ReportGame
