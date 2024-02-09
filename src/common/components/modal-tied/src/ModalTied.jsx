import React from 'react'
import Button from '../../button/src/Button'
import '../style/desktop.scss' // Importa los estilos
import {Link} from 'react-router-dom'

const ModalTied = ({type, label, onClick}) => {
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

export default ModalTied
