import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../button/src/Button'
import ComponentLetters from '../../component-letters/src/ComponentLetters'
import '../style/desktop.scss'

const ReportGame = ({textReport, takeRound, value, onClick}) => {
  const base = 'contain-reportGame'
  const roundClass =
    value === 'x'
      ? `${base}--contain-textRound__yellow`
      : `${base}--contain-textRound__blue`

  return (
    <div className={base}>
      <div className={`${base}--letter-report`}>
        <p className={`${base}--letter-report__textReport`}>{textReport}</p>
      </div>
      <div className={`${base}--contain-textRound`}>
        <ComponentLetters value={value} />
        <p className={roundClass}>{takeRound}</p>
      </div>
      <div className={`${base}--contain-button`}>
        <Link to="/">
          <Button type="small-gray" label="QUIT" />
        </Link>
        <Button onClick={onClick} type="small-yellow" label="NEXT ROUND" />
      </div>
    </div>
  )
}

export default ReportGame
