import React from 'react'
import {Link} from 'react-router-dom'
import Button from '../../button/src/Button'
import '../style/desktop.scss'

const ModalTied = ({onClick}) => {
  const defaultTied = 'contain-tied'
  const containText = 'contain-text'
  const containButton = 'contain-button'

  return (
    <div className={defaultTied}>
      <div className={`${defaultTied}--${containText}`}>
        <p className={`${defaultTied}--${containText}__text`}>ROUND TIED</p>
      </div>
      <div className={`${defaultTied}--${containButton}`}>
        <Link to="/">
          <Button type="small-gray" label="QUIT" />
        </Link>
        <Button onClick={onClick} type="small-yellow" label="NEXT ROUND" />
      </div>
    </div>
  )
}

export default ModalTied
