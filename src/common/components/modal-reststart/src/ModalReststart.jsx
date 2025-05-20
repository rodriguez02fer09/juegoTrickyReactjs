import React from 'react'
import Button from '../../button/src/Button'
import '../style/desktop.scss' // Importa los estilos
import {Link} from 'react-router-dom'

const ModalReststart = ({textReststart, type, label, onConfirm, onCancel}) => {
  const defaultRestStart = 'contain-restatStart'
  const letterReststart = 'letter-reststart'
  const containButton = 'contain-button'

  return (
    <div className={defaultRestStart}>
      <div className={`${defaultRestStart}--${letterReststart}`}>
        <p className={`${defaultRestStart}--${letterReststart}__textReststart`}>
          RESTART GAME ?
        </p>
      </div>

      <div className={`${defaultRestStart}--${containButton}`}>
        <Button type="small-gray" label="NO, CANCEL" onClick={onCancel} />

        <Button type="small-yellow" label="YES, RESTART" onClick={onConfirm} />
      </div>
    </div>
  )
}

export default ModalReststart
