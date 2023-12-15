import React from 'react'
import Button from '../../button/src/Button'
import '../style/desktop.scss'
import ComponentLetters from '../../component-letters/src/ComponentLetters'

const ReportGame = ({
  textReport,
  takeRound,
  type,
  label,
  value,
  playerTurn,
}) => {
  const defaultReport = 'contain-reportGame'
  const letterReport = 'letter-report'
  const containButton = 'contain-button'

  return (
    <div className={defaultReport}>
      <p>{textReport}</p>
      <div className={`${defaultReport}--${letterReport}`}>
        <ComponentLetters value={value} playerTurn={playerTurn} />
        <p>{takeRound}</p>
      </div>
      <div className={`${defaultReport}--${containButton}`}>
        <Button type={'small-gray'} label={'QUIT'} />
        <Button type={'small-yellow'} label={'NEXT ROUND'} />
      </div>
    </div>
  )
}

export default ReportGame
